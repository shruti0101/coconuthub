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
    images: ["/test/6.png", "/test/7.png", "/test/8.webp", "/test/9.webp", "/test/10.png"]
  },
  // {
  //   id: 3,
  //   name: "Rose Pistachio Dates",
  //   images: ["/test/11.webp", "/test/12.webp", "/test/13.webp", "/test/14.webp", "/test/15.webp"]
  // }
]

export default function BestsellerSection() {

  const [index,setIndex] = useState(0)

  const nextProduct = () => {
    setIndex((prev)=> (prev + 1) % bestsellers.length)
  }

  const prevProduct = () => {
    setIndex((prev)=> (prev - 1 + bestsellers.length) % bestsellers.length)
  }

  useEffect(()=>{
    const slider = setInterval(()=>{
      nextProduct()
    },4000)

    return ()=> clearInterval(slider)
  },[])

  return (
 <section
style={{backgroundImage:"url(/bgcheck.png)"}}
  className="relative w-full bg-cover bg-center py-20 px-8 lg:px-20 overflow-hidden"
>

  {/* DARK OVERLAY */}
  {/* <div className="absolute inset-0 bg-black/50"></div> */}

  {/* Content */}
  <div className="relative z-10">

    {/* Header */}
    <div className="max-w-[1300px] mx-auto mb-14 flex items-center justify-between">

      <div>
        <p className="text-xs tracking-[0.35em] uppercase text-white/80 mb-2">
          Customer Favorites
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Bestselling Products
        </h2>
      </div>

      <div className="flex gap-3">

        <button
          onClick={prevProduct}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        <button
          onClick={nextProduct}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
        >
          →
        </button>

      </div>

    </div>

    {/* SLIDER */}
    <div className="max-w-[1300px] mx-auto overflow-hidden">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >

        {bestsellers.map((product) => (
          <div key={product.id} className="min-w-full">

            <div className="grid grid-cols-6 gap-8">

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