"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const bestsellers = [
  {
    id: 1,
    name: "Stuffed Medjool Dates",
    images: ["/test/2.webp", "/test/1.webp", "/test/3.webp", "/test/6.png", "/test/5.png"]
  },
  {
    id: 2,
    name: "Chocolate Hazelnut Dates",
    images: ["/test/6.png", "/test/7.png", "/product/CaliforniaAlmondsRoasted250g.webp", "/product/chocolateDates.webp", "/test/10.png"]
  },
  // {
  //   id: 3,
  //   name: "Rose Pistachio Dates",
  //   images: ["/test/11.webp", "/test/12.webp", "/test/13.webp", "/test/14.webp", "/test/15.webp"]
  // }
]

export default function BestsellerSection() {

  const [index, setIndex] = useState(0)

  const nextProduct = () => {
    setIndex((prev) => (prev + 1) % bestsellers.length)
  }

  const prevProduct = () => {
    setIndex((prev) => (prev - 1 + bestsellers.length) % bestsellers.length)
  }

  useEffect(() => {
    const slider = setInterval(() => {
      nextProduct()
    }, 4000)

    return () => clearInterval(slider)
  }, [])

  return (
    <section
      style={{ backgroundImage: "url(/bgcheck.png)" }}
      className="relative w-full bg-cover bg-center py-10 px-4 lg:px-20 overflow-hidden"
    >

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content */}
      <div className="relative z-10">

        {/* Header */}
        <div className="max-w-[1300px] mx-auto mb-10 lg:mb-14 flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center justify-between px-4 lg:px-0">

          <div>
            <p className="text-xs tracking-[0.35em] uppercase text-white/80 mb-2">
              Customer Favorites
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Bestselling Products
            </h2>
          </div>

          <div className="flex gap-3 self-start lg:self-auto">
            <button
              onClick={prevProduct}
              className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
            >
              ←
            </button>

            <button
              onClick={nextProduct}
              className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
            >
              →
            </button>
          </div>

        </div>

        {/* SLIDER */}
        <div className="max-w-[1300px] mx-auto overflow-hidden px-4 lg:px-0">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >

            {bestsellers.map((product) => (
              <div key={product.id} className="min-w-full">
                {/* MOBILE LAYOUT */}
                <div className="grid grid-cols-1 gap-4 lg:hidden">
                  {product.images.map((img, i) => (
                    <div key={i} className="w-full h-[220px] relative rounded-xl overflow-hidden">
                      <Image src={img} fill className="object-cover" alt="" />
                    </div>
                  ))}

                </div>

                {/* DESKTOP LAYOUT (UNCHANGED) */}
                <div className="hidden lg:grid grid-cols-6 gap-8">

                  <div className="col-span-4 h-[330px] relative rounded-[22px] overflow-hidden">
                    <Image src={product.images[0]} fill className="object-cover" alt="" />
                  </div>

                  <div className="col-span-2 h-[330px] relative rounded-[22px] overflow-hidden">
                    <Image src={product.images[1]} fill className="object-cover" alt="" />
                  </div>

                  <div className="col-span-2 h-[260px] relative rounded-[22px] overflow-hidden">
                    <Image src={product.images[2]} fill className="object-cover" alt="" />
                  </div>

                  <div className="col-span-2 h-[260px] relative rounded-[22px] overflow-hidden">
                    <Image src={product.images[3]} fill className="object-cover" alt="" />
                  </div>

                  <div className="col-span-2 h-[260px] relative rounded-[22px] overflow-hidden">
                    <Image src={product.images[4]} fill className="object-cover" alt="" />
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  )
}