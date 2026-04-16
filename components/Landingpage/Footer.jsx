"use client";
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer
      style={{ backgroundImage: "url(/banner2.webp)" }}
      className="relative text-white overflow-hidden bg-center bg-cover"
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-6 py-25 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">

        {/* ABOUT */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-b border-yellow-400 pb-2">
            About Us
          </h3>

          <p className="text-sm text-white leading-relaxed">
            At Vishal Enterprises, we take immense pride in being one of the
            most trusted suppliers of premium dry fruits in India, delivering
            products that are fresh, nutritious, and packed with natural
            goodness. Our collection includes a variety of high-quality dry
            fruits and dates such as Kalmi Dates, Kimia Dates, Medjoul Dates,
            Dried Figs, Dry Fruits, Tunisian Dates, Zahidi Dates and more.
          </p>
        </div>

      

        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-b border-yellow-400 pb-2">
            Categories
          </h3>

          <ul className="space-y-3 text-sm text-white">
            <li><a href="#" className="hover:text-yellow-400">Kalmi Dates</a></li>
            <li><a href="#" className="hover:text-yellow-400">Kimia Dates</a></li>
            <li><a href="#" className="hover:text-yellow-400">Medjoul Dates</a></li>
            <li><a href="#" className="hover:text-yellow-400">Dried Figs</a></li>
            <li><a href="#" className="hover:text-yellow-400">Dry Fruits</a></li>
            <li><a href="#" className="hover:text-yellow-400">Tunisian Dates</a></li>
            <li><a href="#" className="hover:text-yellow-400">Zahidi Dates</a></li>
            <li><a href="#" className="hover:text-yellow-400">Ajwa Dates</a></li>
            <li><a href="#" className="hover:text-yellow-400">Dried Apricot</a></li>
          </ul>
        </div>

          {/* MORE SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-b border-yellow-400 pb-2">
            More Services
          </h3>

          <ul className="space-y-3 text-sm text-white">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/products" className="hover:text-yellow-400">Products</a></li>
            <li><a href="/our-blogs" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact Us</a></li>
            {/* <li><a href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-yellow-400">Terms & Conditions</a></li>
            <li><a href="/return-policy" className="hover:text-yellow-400">Return & Refund Policy</a></li>
            <li><a href="/shipping-policy" className="hover:text-yellow-400">Shipping Policy</a></li> */}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-b border-yellow-400 pb-2">
            Contact Info
          </h3>

          <p className="text-sm flex items-start gap-3 mb-3 text-white">
            <FaMapMarkerAlt className="mt-1 text-yellow-400" />
            Ground Floor, Azadpur Block-B 133,
            New Sabzi Mandi, Delhi 110033
          </p>

          <p className="text-sm flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-yellow-400" /> +91 98180 59818
          </p>

          <p className="text-sm flex items-center gap-2 mb-4">
            <FaEnvelope className="text-yellow-400" /> support@datesuppliers.com
          </p>

          <div className="flex gap-3">
            <a href="https://www.youtube.com/@VExoticdaily" target="blank" className="p-2 bg-white/10 rounded hover:bg-red-600"><FaYoutube /></a>
            <a href="https://www.facebook.com/exooticcrate/" target="blank" className="p-2 bg-white/10 rounded hover:bg-blue-600"><FaFacebookF /></a>
            <a href="https://www.instagram.com/exoticcrate/" target="blank" className="p-2 bg-white/10 rounded hover:bg-pink-500"><FaInstagram /></a>
          </div>
        </div>

        {/* TRUST ELITE */}
        <div>
          <h3 className="text-lg font-semibold mb-5 border-b border-yellow-400 pb-2">
            Trust Elite
          </h3>

          <p className="text-sm text-white mb-4">
            We are proud to present the TrustElite Certificate of Excellence to Vishal Enterprise, recognizing their commitment to exceptional customer service, outstanding business practices, and a dedication to building trust with their customers.
          </p>

          <img
            src="/TRUST-ELITE.webp"
            alt="Trust Elite"
            className="w-24 cursor-pointer hover:scale-105 transition"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-white/10 bg-black/80 py-4 text-sm text-white flex flex-col md:flex-row justify-between items-center px-6">
        <p>© 2024-25 Vishal Enterprises. All rights reserved.</p>

        <p>
          Website Designed By{" "}
          <a
            href="https://promozionebranding.com/"
            className="text-yellow-400 hover:underline"
          >
            Promozione Branding Pvt. Ltd.
          </a>
        </p>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          ></div>
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <img
              src="/TrustElite.webp"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;