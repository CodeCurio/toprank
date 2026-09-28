"use client";

import { useState, useEffect } from "react";
import {
  Inbox,
  Search,
  Phone,
  Trash2,
  CheckCircle2,
  Clock,
  User,
  MapPin,
  Calendar,
} from "lucide-react";
import { useAdminTheme } from "@/components/admin/AdminThemeContext";

export default function AdminLeadsPage() {
  const { isLight } = useAdminTheme();
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
      const res = await fetch("/api/leads");
      const json = await res.json();
      setLeads(json.data || []);
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to update status");
      }

      setLeads(leads.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
    } catch (err: any) {
      alert("Failed to update status: " + err.message);
    }
  };

  const deleteLead = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete lead enquiry from "${name}"?`)) return;

    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to delete lead");
      }

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
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header Bar */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border shadow-sm transition-all ${
        isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900 border-slate-800 text-white shadow-xl"
      }`}>
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-black uppercase tracking-widest mb-2">
            <Inbox className="w-3.5 h-3.5" /> Enquiries &amp; Lead Engine
          </div>
          <h1 className={`text-2xl font-black tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
            Contact Enquiries Manager
          </h1>
          <p className={`text-xs font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>
            Real-time enquiries submitted from website contact forms and lead funnels
          </p>
        </div>

        <div className="flex items-center gap-2">
          {["All", "New", "Contacted", "Closed"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all ${
                statusFilter === status
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : isLight
                  ? "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                  : "bg-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${isLight ? "text-slate-400" : "text-slate-500"}`} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, phone, city, or service..."
          className={`w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm font-bold focus:outline-none transition-colors border ${
            isLight
              ? "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 shadow-xs"
              : "bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-emerald-500"
          }`}
        />
      </div>

      {/* Leads Table */}
      <div className={`border rounded-3xl p-6 overflow-hidden shadow-sm transition-all ${
        isLight ? "bg-white border-slate-200/90 text-slate-900" : "bg-slate-900/90 border-slate-800 text-white shadow-xl"
      }`}>
        {loading ? (
          <div className="py-12 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
            Loading Contact Enquiries...
          </div>
        ) : filteredLeads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className={`border-b text-[10px] font-black uppercase tracking-wider ${
                  isLight ? "border-slate-200 text-slate-500 bg-slate-50/50" : "border-slate-800 text-slate-400"
                }`}>
                  <th className="pb-3 px-3">Date</th>
                  <th className="pb-3 px-3">Contact Profile</th>
                  <th className="pb-3 px-3">Phone / WhatsApp</th>
                  <th className="pb-3 px-3">Service Requested</th>
                  <th className="pb-3 px-3">Location</th>
                  <th className="pb-3 px-3">Status Action</th>
                  <th className="pb-3 px-3 text-right">Delete</th>
                </tr>
              </thead>
              <tbody className={`divide-y font-semibold ${isLight ? "divide-slate-100" : "divide-slate-800/60"}`}>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className={`transition-colors ${isLight ? "hover:bg-slate-50" : "hover:bg-slate-800/40"}`}>
                    <td className={`py-4 px-3 whitespace-nowrap ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                      {new Date(lead.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-4 px-3">
                      <div>
                        <p className={`font-bold text-sm ${isLight ? "text-slate-900" : "text-white"}`}>{lead.name}</p>
                        {lead.message && (
                          <p className={`text-[11px] font-normal line-clamp-1 max-w-xs mt-0.5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                            "{lead.message}"
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-3">
                      <a
                        href={`https://wa.me/91${lead.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-600 font-bold hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{lead.phone}</span>
                      </a>
                    </td>
                    <td className={`py-4 px-3 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border ${
                        isLight ? "bg-slate-100 border-slate-200 text-slate-700" : "bg-slate-800 border-slate-700 text-slate-300"
                      }`}>
                        {lead.service_requested || "General"}
                      </span>
                    </td>
                    <td className={`py-4 px-3 ${isLight ? "text-slate-600" : "text-slate-400"}`}>{lead.city || "Lucknow"}</td>
                    <td className="py-4 px-3">
                      <select
                        value={lead.status || "New"}
                        onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                        className={`px-2.5 py-1.5 rounded-xl text-[11px] font-bold focus:outline-none border ${
                          lead.status === "New"
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                            : lead.status === "Contacted"
                            ? "bg-blue-50 border-blue-200 text-blue-700"
                            : isLight
                            ? "bg-slate-100 border-slate-200 text-slate-600"
                            : "bg-slate-950 border-slate-800 text-slate-300"
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Closed">Closed / Converted</option>
                      </select>
                    </td>
                    <td className="py-4 px-3 text-right">
                      <button
                        onClick={() => deleteLead(lead.id, lead.name)}
                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        title="Delete enquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-12 text-center text-slate-500">
            <Inbox className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-xs font-bold">No enquiries found</p>
          </div>
        )}
      </div>

    </div>
  );
}
