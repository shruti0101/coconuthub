"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";
import CartDrawer from "@/components/CartDrawer";
import { Toaster } from "react-hot-toast";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
  const hideLayout = pathname.startsWith("/studio" , "/login");

  return (
    <>
      {!hideLayout && <Navbar />}


       <Toaster
    position="top-right"
    toastOptions={{
      style: {
        background: "#0f172a",
        color: "#fff",
      },
    }}
  />
      {children}
         <CartDrawer />
      {!hideLayout && <Footer />}
    </>
  );
}
