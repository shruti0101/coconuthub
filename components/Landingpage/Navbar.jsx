"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { categories } from "@/Data";
import { ShoppingCart } from "lucide-react"
import { useCartStore } from "@/store/cart"
import { usePathname } from "next/navigation";
export default function Navbar() {

  const [active, setActive] = useState("HOME");
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
const pathname = usePathname();



  const dropdownRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const [scroll, setScroll] = useState(false);

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
    { name: "PRODUCTS", link: "/" },
    { name: "GIFTINGS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];


const cart = useCartStore((state) => state.cart)
const openCart = useCartStore((state) => state.openCart)

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scroll ? "bg-black/50" : "bg-transparent"}`}>
      
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-1">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo-red.webp"
            alt="logo"
            width={130}
            height={100}
            className="rounded cursor-pointer"
          />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden lg:flex text-white text-lg items-center gap-10 font-bold">
          {navItems.map((item) => {

            if (item.name === "PRODUCTS") {
              return (
                <div key={item.name} className="relative text-white" ref={dropdownRef}>
                  
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center gap-1 hover:text-[#d8b066]"
                  >
                    PRODUCTS
                    <ChevronDown size={16} />
                  </button>

                  {productsOpen && (
            
                    <div className="absolute top-8 left-0 bg-white text-black shadow-xl rounded-lg w-52 p-4 space-y-2 z-50">
{
  categories.map((cat)=>(
   <Link
                      key={cat.id}
                      href={`/categories/${cat.id}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileCategoryOpen(false);
                      }}
                      className="text-gray-700 hover:text-emerald-600"
                    >
                      {cat.name}
                    </Link>
  )

  )
}
                      <Link href="/products/dry-fruits" className="block hover:text-[#c79b47]">
                        Dry Fruits
                      </Link>

                      <Link href="/products/chocolates" className="block hover:text-[#c79b47]">
                        Chocolates
                      </Link>

                      <Link href="/products/sweets" className="block hover:text-[#c79b47]">
                        Sweets
                      </Link>

                      <Link href="/products/gift-boxes" className="block hover:text-[#c79b47]">
                        Gift Boxes
                      </Link>

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
                className={`transition ${
                  active === item.name
                    ? "bg-[#d8b066] text-black px-4 py-2 rounded-full font-semibold"
                    : "hover:text-[#d8b066]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 text-white">

          <button onClick={() => setSearchOpen(true)}>
            <Search size={22} />
          </button>


{/* cart */}
 <button onClick={openCart} className="relative hidden lg:flex">
    <ShoppingCart size={22} />
    <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      ({cart.length})
    </span>
  </button>
          <Link
            href="/contact"
            className="bg-[#D8B066] px-4 py-2 rounded"
          >
            Request a Quote
          </Link>

          <button
            className="lg:hidden"
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
              className="text-sm px-4 bg-black text-white rounded-md"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white text-black border-t p-6 space-y-4">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block"
            >
              {item.name}
            </Link>
          ))}

        </div>
      )}

    </header>
  );
}