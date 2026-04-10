"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Popup from "../Enquiry"
gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false)
  const leftDates = useRef(null)
  const rightDates = useRef(null)

  useEffect(() => {

    gsap.set([leftDates.current, rightDates.current], {
      force3D: true,
      willChange: "transform"
    })

    const tl = gsap.timeline({ repeat: -1, yoyo: true })

    tl.to(leftDates.current, {
      y: -35,
      x: 15,
      rotation: -3,
      duration: 4,
      ease: "sine.inOut"
    })

    tl.to(rightDates.current, {
      y: -45,
      x: -20,
      rotation: 4,
      duration: 4,
      ease: "sine.inOut"
    }, "<")

  }, [])


  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full lg:h-[90vh] overflow-">
        {/* GREEN BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2f9b86] to-[#6fb3a1]" />

        {/* PALM TREE (hide on mobile) */}
        <Image
          src="/dessert-palm.png"
          alt=""
          fill
          priority
          className="hidden lg:block object-cover opacity-25"
        />

        {/* TEXT CONTENT */}
        <div className="relative z-30 max-w-[1400px] mx-auto h-full flex items-center px-6 lg:px-20 py-16 lg:py-0">

          <div className="text-white max-w-[600px] text-center lg:text-left mx-auto lg:mx-0">

            <h2 className="text-3xl sm:text-4xl lg:text-[56px] lg:leading-[64px] font-semibold">
              Your Trusted Partner in Premium Dates & Dry Fruits
            </h2>

            <p className="text-base sm:text-lg mt-6 leading-relaxed lg:leading-[30px] text-white">
              Looking for a reliable supplier of premium dates, dry fruits, and coconuts?
              Partner with <strong>Vishal Enterprise</strong> today. We deliver superior
              quality products, consistent freshness, and dependable service you can trust.
              Let us support your wholesale and retail needs with excellence.
            </p>

            <button onClick={() => setShowPopup(true)} className="mt-8 bg-white text-[#2f9b86] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Request a Callback
            </button>

          </div>

        </div>

        {/* DECORATIVE IMAGES (hide on mobile) */}
        <Image
          ref={leftDates}
          src="/dateside.png"
          alt=""
          width={500}
          height={300}
          className="hidden lg:block absolute -bottom-80 left-0 z-20"
        />

        <Image
          ref={rightDates}
          src="/dateside2.png"
          alt=""
          width={400}
          height={150}
          className="hidden lg:block absolute -bottom-30 right-[20px] z-30"
        />

        {/* ZIGZAG (hide on mobile) */}
        <div className="hidden lg:flex absolute bottom-10 left-0 w-full h-[370px] z-10 justify-center items-start">
          <Image
            src="/zigzag.png"
            alt=""
            fill
            className="mt-8 w-full object-cover"
          />
        </div>

      </section>


      {/* QUALITY PROCESS SECTION */}

      <section className="py-24 bg-[#f7f7f7]">

        <div className="max-w-[1300px] mx-auto px-8">

          {/* Heading */}
          <div className="text-center max-w-[700px] mx-auto">

            <h2 className="text-4xl font-semibold text-[#2f9b86]">
              Quality Process – How We Ensure Freshness
            </h2>

            <p className="mt-6 text-gray-600 leading-[28px]">
              At Vishal Enterprise, maintaining the highest standards of quality
              and freshness is at the core of our operations. Our streamlined
              process ensures that every product delivered meets strict quality
              expectations, especially for our B2B and bulk buyers.
            </p>

          </div>


          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

            {/* Sourcing */}
            <div className="relative overflow-hidden rounded-xl shadow-sm">

              <Image
                src="/quality/1.webp"
                alt=""
                fill
                className="object-cover opacity-55"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-8 text-white">

                <h3 className="text-xl md:text-3xl font-semibold">
                  Sourcing
                </h3>

                <p className="mt-4 text-white leading-[26px]">
                  We procure our coconuts, dates, and dry fruits from trusted farms
                  and reliable suppliers, ensuring premium-grade raw products with
                  consistent quality and freshness.
                </p>

              </div>

            </div>


            {/* Sorting */}
            <div className="relative overflow-hidden rounded-xl shadow-sm">

              <Image
                src="/quality/2.webp"
                alt=""
                fill
                className="object-cover opacity-55"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-8 text-white">

                <h3 className="text-xl md:text-3xl font-semibold">
                  Sorting
                </h3>

                <p className="mt-4 text-white leading-[26px]">
                  Each batch undergoes careful inspection, grading, and sorting
                  based on size, texture, moisture level, and overall quality
                  to maintain uniform standards.
                </p>

              </div>

            </div>


            {/* Packaging */}
            <div className="relative overflow-hidden rounded-xl shadow-sm">

              <Image
                src="/quality/3.webp"
                alt=""
                fill
                className="object-cover opacity-55"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-8 text-white">

                <h3 className="text-xl md:text-3xl font-semibold">
                  Packaging
                </h3>

                <p className="mt-4 text-white leading-[26px]">
                  We use secure and hygienic packaging solutions designed for
                  both bulk and retail requirements, preserving freshness,
                  preventing contamination, and ensuring safe transportation.
                </p>

              </div>

            </div>


            {/* Storage */}
            <div className="relative overflow-hidden rounded-xl shadow-sm">

              <Image
                src="/quality/4.webp"
                alt=""
                fill
                className="object-cover opacity-55"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 p-8 text-white">

                <h3 className="text-xl md:text-3xl font-semibold">
                  Storage
                </h3>

                <p className="mt-4 text-white leading-[26px]">
                  Our well-maintained storage facilities help retain natural
                  taste, nutritional value, and shelf life by protecting
                  products from moisture, heat, and external damage.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Popup setShowPopup={setShowPopup} showPopup={showPopup} />
    </>
  )
}