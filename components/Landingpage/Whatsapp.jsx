// WhatsAppChat.jsx
'use client'
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/+919818059818"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp "
      className="hidden md:block fixed bottom-5 right-1 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
    >
      <FaWhatsapp size={34} />
    </a>
  );
};

export default Whatsapp;
