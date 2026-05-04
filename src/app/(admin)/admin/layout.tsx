import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import AdminLayoutClient from "./AdminLayoutClient";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession();

  // Redirect to login if not authenticated
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <AdminLayoutClient session={session}>
      {children}
    </AdminLayoutClient>
  );
}
