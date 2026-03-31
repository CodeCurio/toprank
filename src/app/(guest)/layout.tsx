import { Navbar } from "@/components/layout/Navbar";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { Footer } from "@/components/layout/Footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <FloatingContact />
      <Footer />
    </>
  );
}
