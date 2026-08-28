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

    let isMounted = true;

    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user && isMounted) {
          setUser(session.user);
          setLoading(false);
          return;
        }

        const { data: { user: currentUser } } = await supabase.auth.getUser();
        if (currentUser && isMounted) {
          setUser(currentUser);
          setLoading(false);
          return;
        }

        // Check local storage marker
        if (typeof window !== "undefined") {
          const loggedInMark = localStorage.getItem("toprank_admin_logged_in");
          if (loggedInMark === "true" && isMounted) {
            setUser({ email: "admin@toprankindia.com" });
            setLoading(false);
            return;
          }
        }

        // If no active session or user found, redirect to login
        if (isMounted) {
          router.push("/admin/login");
        }
      } catch (err) {
        console.error("Auth check error:", err);
        if (isMounted) {
          router.push("/admin/login");
        }
      }
    };

    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!isMounted) return;
      if (session?.user) {
        setUser(session.user);
        setLoading(false);
      } else if (event === "SIGNED_OUT" && pathname !== "/admin/login") {
        if (typeof window !== "undefined") {
          localStorage.removeItem("toprank_admin_logged_in");
        }
        router.push("/admin/login");
      }
    });

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
    };
  }, [pathname, router]);

  const handleLogout = async () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem("toprank_admin_logged_in");
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
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Opening Control Center...</p>
      </div>
    );
  }

  const navItems = [
    { name: "Overview", href: "/admin", icon: LayoutDashboard },
    { name: "Portfolios", href: "/admin/portfolios", icon: Briefcase },
    { name: "Blog Posts", href: "/admin/blogs", icon: FileText },
    { name: "Contact Leads", href: "/admin/leads", icon: Inbox },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans selection:bg-purple-600 selection:text-white">
      
      {/* Mobile Top Navbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Image src={LogoImg} alt="TopRank Logo" className="h-7 w-auto object-contain brightness-0 invert" />
          <span className="text-xs font-black uppercase tracking-widest text-purple-400">Admin</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-xl bg-slate-800 text-slate-300"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-screen w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 flex flex-col justify-between p-6 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-8">
          {/* Logo & Portal Badge */}
          <div>
            <Link href="/admin" className="flex items-center gap-2 mb-2">
              <div className="bg-white p-1.5 rounded-xl">
                <Image src={LogoImg} alt="TopRank Logo" className="h-6 w-auto object-contain" />
              </div>
              <span className="text-sm font-black text-white tracking-tight">TopRank Admin</span>
            </Link>
            <span className="inline-block text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              Control Center
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Badge & Logout Button */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold text-xs">
              <UserCheck className="w-4 h-4" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">{user?.email || "Admin User"}</p>
              <p className="text-[10px] text-emerald-400 font-semibold">Active Session</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold transition-colors"
            >
              <Globe className="w-3.5 h-3.5" /> View Live
            </Link>
            <button
              onClick={handleLogout}
              className="p-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 md:p-10 overflow-y-auto max-w-full">
        {children}
      </main>

    </div>
  );
}
