"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-[#FBF7F1] text-[#2B1B12]">

      {/* ================= HERO ================= */}
      <section style={{backgroundImage:"url(/xx.png)"}} className="relative py-35 text-center bg-center bg-cover text-white overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-7xl font-semibold mb-6">
            Let's Start a Conversation
          </h1>

          <p className="text-lg text-white">
            Whether you're looking for premium dates, wholesale supply,
            corporate gifting or partnerships — our team is ready to assist you.
          </p>
        </motion.div>

      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">

        {/* ================= CONTACT INFO ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-semibold mb-6">
            Contact Information
          </h2>

          <p className="text-lg text-[#444] leading-relaxed mb-12">
            Our team is always available to help you with product enquiries,
            wholesale orders, corporate gifting and retail partnerships.
            Reach out to us anytime and we will respond quickly.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg">
              <Phone className="text-[#6B091D]" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-700">+91 7065650411</p>
                <p className="text-gray-700">+91 9773999082</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg">
              <Mail className="text-[#6B091D]" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-700">customercare@mrdates.in</p>
                <p className="text-gray-700">sales@mrdates.in</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg">
              <MapPin className="text-[#6B091D]" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-700">
                  C-62, New Sabzi Mandi, Block C, Azadpur <br />
                  Delhi – 110033
                </p>
              </div>
            </div>

          </div>
        </motion.div>


        {/* ================= FORM ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="bg-white/60 backdrop-blur-lg border border-white/40 rounded-[30px] shadow-[0_40px_120px_rgba(0,0,0,0.15)] p-10">

            <h3 className="text-2xl font-semibold mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              {/* NAME */}
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#6B091D]"
                />
                <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#6B091D] 
                peer-valid:-top-3 peer-valid:text-xs">
                  Your Name
                </label>
              </div>

              {/* EMAIL */}
              <div className="relative">
                <input
                  type="email"
                  required
                  className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#6B091D]"
                />
                <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#6B091D]
                peer-valid:-top-3 peer-valid:text-xs">
                  Email Address
                </label>
              </div>

              {/* PHONE */}
              <div className="relative">
                <input
                  type="tel"
                  required
                  className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#6B091D]"
                />
                <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#6B091D]
                peer-valid:-top-3 peer-valid:text-xs">
                  Phone Number
                </label>
              </div>

              {/* MESSAGE */}
              <div className="relative">
                <textarea
                  rows="4"
                  required
                  className="peer w-full border-b border-gray-400 bg-transparent py-3 outline-none focus:border-[#6B091D]"
                />
                <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all 
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#6B091D]
                peer-valid:-top-3 peer-valid:text-xs">
                  Your Message
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#6B091D] text-white py-4 rounded-full font-medium tracking-wide hover:bg-[#540715] transition"
              >
                Send Message
              </motion.button>

            </form>

          </div>

        </motion.div>

      </section>


      {/* ================= MAP ================= */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-[30px] overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.0136353497383!2d77.1712696!3d28.714073999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01beb907eaf7%3A0x5089b5634f28242e!2sMr%20Dates!5e1!3m2!1sen!2sin!4v1770445719419!5m2!1sen!2sin"
            className="w-full h-[70vh] border-0"
            loading="lazy"
            allowFullScreen
            title="Mr Dates Location"
          />

        </div>
      </section>

    </div>
  );
};

export default ContactPage;