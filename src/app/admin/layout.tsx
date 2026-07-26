"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/components/images/TopRank logo.webp";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Inbox,
  LogOut,
  Globe,
  Menu,
  X,
  UserCheck,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Skip auth check if currently on the login page
    if (pathname === "/admin/login") {
      setLoading(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          setLoading(false);
          return;
        }

        const { data: { user: currentUser } } = await supabase.auth.getUser();
        if (currentUser) {
          setUser(currentUser);
          setLoading(false);
          return;
        }

        // Fast fallback: check localStorage stored session token
        if (typeof window !== "undefined") {
          const storedToken = localStorage.getItem("sb-wxdbburfdxkqmxmmexbi-auth-token");
          if (storedToken) {
            try {
              const parsed = JSON.parse(storedToken);
              if (parsed?.user) {
                setUser(parsed.user);
                setLoading(false);
                return;
              }
            } catch (e) {}
          }
        }

        // If no active session or user found, redirect to login
        router.push("/admin/login");
      } catch (err) {
        console.error("Auth check error:", err);
        router.push("/admin/login");
      }
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" && pathname !== "/admin/login") {
        router.push("/admin/login");
      } else if (session?.user) {
        setUser(session.user);
        setLoading(false);
      }
    });

    return () => authListener.subscription.unsubscribe();
  }, [pathname, router]);

  const handleLogout = async () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("sb-wxdbburfdxkqmxmmexbi-auth-token");
      }
      await supabase.auth.signOut();
    } catch (e) {}
    window.location.href = "/admin/login";
  };

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-3">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Verifying Admin Permissions...</p>
      </div>
    );
  }

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Blog Posts", href: "/admin/blogs", icon: FileText },
    { name: "Portfolios", href: "/admin/portfolios", icon: Briefcase },
    { name: "Contact Leads", href: "/admin/leads", icon: Inbox },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col md:flex-row">
      
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1.5 rounded-lg">
            <Image src={LogoImg} alt="Logo" className="h-6 w-auto object-contain" />
          </div>
          <span className="text-sm font-black tracking-tight text-white">Admin Panel</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`fixed md:sticky top-0 bottom-0 left-0 z-50 w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div>
          {/* Brand Logo */}
          <div className="p-6 border-b border-slate-800/80">
            <Link href="/admin" className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-sm shrink-0">
                <Image src={LogoImg} alt="TopRank Logo" className="h-7 w-auto object-contain" />
              </div>
              <div>
                <span className="text-sm font-black text-white block leading-tight">Admin Portal</span>
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">TopRank CMS</span>
              </div>
            </Link>
          </div>

          {/* Admin User Info Card */}
          <div className="p-4 mx-3 my-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Super Admin</span>
              <span className="text-xs font-bold text-white truncate block">{user?.email || "Admin User"}</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="px-3 space-y-1.5">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-black transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md shadow-orange-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/70"
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800/80 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <Globe className="w-4 h-4 text-blue-400" />
            <span>View Live Website</span>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 min-h-screen overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
