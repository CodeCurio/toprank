"use client";

import { useState, useEffect, use } from "react";
import { PortfolioForm } from "@/components/admin/PortfolioForm";
import Link from "next/link";
import { ArrowLeft, AlertCircle, RefreshCw } from "lucide-react";

export default function EditPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const portfolioId = resolvedParams.id;

  const [portfolioData, setPortfolioData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPortfolio = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`/api/portfolios/${portfolioId}`);
      if (!res.ok) {
        throw new Error("Failed to load portfolio details from database.");
      }
      const json = await res.json();
      if (json.data) {
        setPortfolioData(json.data);
      } else {
        throw new Error("Portfolio not found.");
      }
    } catch (err: any) {
      console.error("Error fetching portfolio:", err);
      setError(err.message || "Failed to load portfolio item");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, [portfolioId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto py-24 text-center space-y-4">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Loading Case Study Data...
        </p>
      </div>
    );
  }

  if (error || !portfolioData) {
    return (
      <div className="max-w-2xl mx-auto py-16 space-y-6">
        <div className="p-6 rounded-3xl bg-red-500/10 border border-red-500/30 text-red-300 space-y-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-400 shrink-0" />
            <div>
              <h3 className="text-sm font-black text-white">Error Loading Case Study</h3>
              <p className="text-xs text-red-300 mt-0.5">{error || "Case study not found."}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={fetchPortfolio}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retry
            </button>
            <Link
              href="/admin/portfolios"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolios
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <PortfolioForm initialData={portfolioData} isEdit={true} portfolioId={portfolioId} />;
}
