"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  Inbox,
  Search,
  Phone,
  MessageCircle,
  Trash2,
  CheckCircle2,
  Clock,
  User,
  MapPin,
  Calendar,
  Filter,
} from "lucide-react";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;
      setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
    } catch (err: any) {
      alert("Failed to update status: " + err.message);
    }
  };

  const deleteLead = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete lead enquiry from "${name}"?`)) return;

    try {
      const { error } = await supabase.from("leads").delete().eq("id", id);
      if (error) throw error;
      setLeads(leads.filter((l) => l.id !== id));
    } catch (err: any) {
      alert("Failed to delete lead: " + err.message);
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesSearch =
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.toLowerCase().includes(search.toLowerCase()) ||
      l.service_requested?.toLowerCase().includes(search.toLowerCase()) ||
      l.city?.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "All" || l.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-2">
            <Inbox className="w-3.5 h-3.5" /> Enquiries &amp; Lead Engine
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">Contact Enquiries Manager</h1>
          <p className="text-xs text-slate-400 font-medium">Real-time enquiries submitted from website contact forms and lead funnels</p>
        </div>

        <div className="flex items-center gap-2">
          {["All", "New", "Contacted", "Closed"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                statusFilter === status
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-800/80 text-slate-400 hover:text-white"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, phone, city, or service..."
          className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-slate-800 focus:border-emerald-500 rounded-2xl text-sm font-bold text-white placeholder-slate-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Leads Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 overflow-hidden">
        {loading ? (
          <div className="py-12 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
            Loading Contact Enquiries...
          </div>
        ) : filteredLeads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[10px] font-black">
                  <th className="pb-4 px-3">Date</th>
                  <th className="pb-4 px-3">Client Contact</th>
                  <th className="pb-4 px-3">Service Requested</th>
                  <th className="pb-4 px-3">City</th>
                  <th className="pb-4 px-3">Message</th>
                  <th className="pb-4 px-3">Status</th>
                  <th className="pb-4 px-3 text-right">Quick Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-semibold">
                {filteredLeads.map((lead) => {
                  const cleanPhone = lead.phone?.replace(/[^0-9]/g, "") || "";
                  return (
                    <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-4 px-3 text-slate-400 whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-4 px-3">
                        <p className="text-white font-bold text-sm leading-snug">{lead.name}</p>
                        <a href={`tel:+91${cleanPhone}`} className="text-blue-400 font-bold hover:underline">
                          +91 {lead.phone}
                        </a>
                      </td>
                      <td className="py-4 px-3">
                        <span className="bg-slate-800 border border-slate-700 text-slate-200 px-2.5 py-1 rounded-lg text-[10px] font-bold">
                          {lead.service_requested || "General Enquiry"}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-slate-400">{lead.city || "Lucknow"}</td>
                      <td className="py-4 px-3 text-slate-300 max-w-xs truncate" title={lead.message}>
                        {lead.message || "—"}
                      </td>
                      <td className="py-4 px-3">
                        <select
                          value={lead.status || "New"}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                          className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950 border focus:outline-none cursor-pointer ${
                            lead.status === "New"
                              ? "text-emerald-400 border-emerald-500/40"
                              : lead.status === "Contacted"
                              ? "text-blue-400 border-blue-500/40"
                              : "text-slate-400 border-slate-700"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="py-4 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`https://wa.me/91${cleanPhone}?text=Hi%20${encodeURIComponent(
                              lead.name
                            )},%20thank%20you%20for%20reaching%20out%20to%20TopRank%20Digital%20Service!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                            title="Chat on WhatsApp"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={`tel:+91${cleanPhone}`}
                            className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                            title="Call Phone"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => deleteLead(lead.id, lead.name)}
                            className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-12 text-center space-y-2">
            <Inbox className="w-10 h-10 text-slate-700 mx-auto" />
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">No contact enquiries found</p>
          </div>
        )}
      </div>

    </div>
  );
}
