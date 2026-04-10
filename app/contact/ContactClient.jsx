"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import axios from "axios";

const ContactPage = () => {
   const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      platform: "Coconuthub Website Contact Us",
      platformEmail: "support@datesuppliers.com",
      name: formData.get("contactPerson"),
      email: formData.get("email"),
      company: "",
      phone: formData.get("phone"),
      product: "Premium Dates Enquiry",
      place: "Delhi",
      message: formData.get("message"),
    };

    if (!data.phone || data.phone.length < 10)
      return toast.error("Enter Valid Phone Number");

    try {
      setLoading(true);
      const res = await axios.post("https://brandbnalo.com/api/form/add", data,
        { validateStatus: (status) => status >= 200 && status < 500 }
      );

      if (res.status >= 200 && res.status < 300) {
        setSubmitted(true);
        setTimeout(() => {
          e.target.reset();      // reset after UI change
        }, 100);

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      }

    } catch (err) {
      console.log("ERROR:", err?.response || err.message);
      toast.error("Something went wrong");
    }
    finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#FBF7F1] text-[#2B1B12]">
      <section style={{ backgroundImage: "url(/xx.png)" }} className="relative py-35 text-center bg-center bg-cover text-white overflow-hidden">

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

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
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
                <p className="text-gray-700">+91 9818059818</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg">
              <Mail className="text-[#6B091D]" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-700">support@datesuppliers.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg">
              <MapPin className="text-[#6B091D]" />
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-700">
                  Ground Floor, Shop No 133 , Block-B, New Subzi Mandi, <br />
                  Azadpur, New Delhi 110033
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        <motion.div  className="bg-white rounded-[32px] p-10 shadow-lg"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
         {submitted ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-green-600">
                  🎉 Thank You!
                </h2>
                <p className="text-gray-600 mt-2">
                  Your enquiry has been submitted successfully.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-center font-semibold mb-6 text-[#111]">
                  Send Us a Message
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    placeholder="Your Name"
                    className="w-full px-5 py-4 rounded-xl border border-[#6B091D] focus:outline-none focus:border-[#6B091D]"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl border border-[#6B091D] focus:outline-none focus:border-[#6B091D]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 rounded-xl border border-[#6B091D] focus:outline-none focus:border-[#6B091D]"
                  />

                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-5 py-4 rounded-xl border border-[#6B091D] focus:outline-none focus:border-[#6B091D]"
                  />

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                    className="w-full bg-amber-500 text-white py-4 rounded-full font-medium tracking-wide hover:bg-amber-600 transition"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </motion.button>
                </form>
              </>)}
        </motion.div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-[30px] overflow-hidden shadow-2xl">

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.175959106896!2d77.172091!3d28.714287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d021fdf9f2583%3A0x3fd6abc7701b4d50!2sVishal%20Enterprise!5e0!3m2!1sen!2sin!4v1774511220598!5m2!1sen!2sin"
            className="w-full h-[70vh] border-0"
            loading="lazy"
            allowFullScreen
            title="Location"
          />

        </div>
      </section>
    </div>
  );
};

export default ContactPage;