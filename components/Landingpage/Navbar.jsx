"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Menu, X, ShoppingCart } from "lucide-react";
import { categories } from "@/Data";
import { useCartStore } from "@/store/cart";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const pathname = usePathname();
  const isProductPage = pathname.startsWith("/products");

  const dropdownRef = useRef(null);

  // Close dropdown
  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "PRODUCTS", link: "/products" },
    { name: "BLOGS", link: "/" },
    { name: "CONTACT US", link: "/contact" },
  ];

  const cart = useCartStore((state) => state.cart);
  const openCart = useCartStore((state) => state.openCart);


  const textColor = scroll ? "text-white" : isProductPage ? "text-black" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scroll ? "bg-black/60 backdrop-blur-md" : "bg-black/30"
        }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-2">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo-red.webp"
            alt="logo"
            width={120}
            height={80}
            className="cursor-pointer"
          />
        </Link>

        {/* NAV */}
        <nav className={`hidden xl:flex items-center gap-8 font-semibold font-poppins ${textColor}`}
        >
          {navItems.map((item) => {
            if (item.name === "PRODUCTS") {
              return (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center gap-1"
                  >
                    PRODUCTS <ChevronDown size={16} />
                  </button>
                  {productsOpen && (
                    <div className="absolute top-10 left-0 h-60 overflow-auto bg-white text-black shadow-xl rounded-lg w-56 p-4 space-y-2 z-50">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/categories/${cat.id}`}
                          className="block hover:text-[#c79b47]"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setActive(item.name)}
                className="hover:text-[#D8B066] transition"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className={`flex items-center gap-5 ${textColor}`}>

          <div className="hidden lg:flex items-center relative">
            <Search
              size={18}
              className={`absolute left-3 ${scroll ? "text-white" : isProductPage ? "text-black" : "text-white"
                }`}
            />

            <input
              type="text"
              placeholder="Search products..."
              className={`pl-10 pr-4 py-2 rounded-full text-sm outline-none transition-all duration-300 
    ${scroll
                  ? "bg-white/10 text-white placeholder:text-white/70 border border-white/20"
                  : isProductPage
                    ? "bg-gray-400 text-black placeholder:text-white"
                    : "bg-white/30 text-white placeholder:text-white/70 border border-white/20"
                }`}
            />
          </div>

          <button onClick={openCart} className="relative flex">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          </button>

          <Link
            href="/contact"
            className="relative lg:inline-flex hidden items-center justify-center px-6 py-2.5 font-semibold text-black rounded-full overflow-hidden group"
          >
            {/* Gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#d8b066] via-[#e6c98f] to-[#c79b47] transition-all duration-500 group-hover:scale-105"></span>

            {/* Shine effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/20 blur-xl"></span>

            {/* Text */}
            <span className="relative z-10 flex items-center gap-2">
              Request a Quote
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>

          <button
            className="xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* SEARCH */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-40 z-50">
          <div className="bg-white p-6 rounded-xl w-[500px] flex gap-3">
            <input
              autoFocus
              placeholder="Search products..."
              className="flex-1 outline-none border p-3 rounded-md text-black"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="px-4 bg-black text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MOBILE */}
      {mobileOpen && (
        <div className="xl:hidden bg-white text-black border-t p-6 space-y-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.link} className="block">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}