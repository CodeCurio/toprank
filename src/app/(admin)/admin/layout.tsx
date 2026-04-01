import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";
import { 
  LayoutDashboard, 
  PenSquare, 
  LogOut, 
  Globe, 
  ChevronRight,
  Settings,
  Bell,
  Tags,
  MessageSquare
} from "lucide-react";

import SignOutButton from "@/components/admin/SignOutButton";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession();

  // Redirect to login if not authenticated
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900">
      {/* Premium Sidebar */}
      <aside className="w-64 bg-[#0F172A] text-slate-300 flex flex-col fixed inset-y-0 z-50">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
            <span className="text-white font-black text-sm">TR</span>
          </div>
          <h2 className="text-sm font-bold tracking-tight text-white uppercase">
            TopRank Admin
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
          <div>
            <p className="px-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Main Menu</p>
            <nav className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center px-3 py-2.5 text-sm font-semibold rounded-xl bg-blue-600/10 text-blue-400 group transition-all"
              >
                <LayoutDashboard className="w-4 h-4 mr-3" />
                Dashboard
              </Link>
              <Link
                href="/admin/post/new"
                className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl hover:bg-slate-800 hover:text-white transition-all group"
              >
                <PenSquare className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                Create Post
              </Link>
              <Link
                href="/admin/categories"
                className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl hover:bg-slate-800 hover:text-white transition-all group"
              >
                <Tags className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                Categories & Tags
              </Link>
              <Link
                href="/admin/comments"
                className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl hover:bg-slate-800 hover:text-white transition-all group"
              >
                <MessageSquare className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                User Comments
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl hover:bg-slate-800 hover:text-white transition-all group"
              >
                <Settings className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                Admin Settings
              </Link>
            </nav>
          </div>

          <div>
             <p className="px-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Resources</p>
             <nav className="space-y-1">
                <Link
                  href="/"
                  target="_blank"
                  className="flex items-center px-3 py-2.5 text-sm font-medium rounded-xl hover:bg-slate-800 hover:text-white transition-all group"
                >
                  <Globe className="w-4 h-4 mr-3 opacity-60 group-hover:opacity-100" />
                  View Website
                </Link>
             </nav>
          </div>
        </div>

        <div className="p-4 border-t border-slate-800 bg-[#0F172A]">
          <div className="flex items-center p-2 rounded-xl bg-slate-800/50 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xs mr-3">
              {session.user?.email?.[0].toUpperCase() || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white truncate">{session.user?.email}</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-tight">System Admin</p>
            </div>
          </div>
          <SignOutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Modern Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center text-sm font-medium text-slate-400">
            <Link href="/admin" className="hover:text-slate-600 transition-colors">Admin Dashboard</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-slate-900 font-bold">Workspace</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
            <Link
              href="/admin/post/new"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95"
            >
              + New Post
            </Link>
          </div>
        </header>

        <main className="flex-1 p-10 max-w-[1400px] mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}

