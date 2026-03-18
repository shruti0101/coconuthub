"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    title: "Outstanding Quality & Freshness",
    text: "We have been sourcing dry fruits and dates from Vishal Enterprise for several years, and their quality has never disappointed us. The products are always fresh, naturally rich in taste, and carefully selected. Their attention to detail in maintaining hygiene and quality standards truly sets them apart. Highly reliable and consistent supplier!",
    rating: 5
  },
  {
    id: 2,
    title: "Trusted Wholesale Partner",
    text: "Vishal Enterprise has been our trusted partner for bulk requirements of coconuts and premium dates. Their ability to deliver large quantities on time without compromising quality makes them extremely dependable. Their professional approach, transparent dealings, and smooth coordination make business easy and efficient.",
    rating: 5
  },
  {
    id: 3,
    title: "Excellent Packaging & Service",
    text: "One of the most impressive aspects of Vishal Enterprise is their packaging quality. Every product is securely packed to preserve freshness and prevent damage during transit. The grading of dry fruits and dates is top-notch, ensuring premium quality in every shipment. Their service is prompt and well-managed.",
    rating: 5
  },
  {
    id: 4,
    title: "Consistent & Reliable Supply",
    text: "Consistency is what makes Vishal Enterprise stand out in the market. Whether it's a small order or a large bulk supply, they maintain the same level of quality across all products. Their reliability and commitment to delivering exactly what they promise have helped us build a long-term business relationship.",
    rating: 5
  },
  {
    id: 5,
    title: "Highly Recommended for Bulk Orders",
    text: "For anyone looking for premium quality dry fruits, dates, and coconuts in bulk, Vishal Enterprise is a perfect choice. Their team is responsive, cooperative, and always ready to assist with requirements. With competitive pricing and excellent service, they are a highly recommended supplier in the industry.",
    rating: 5
  }
]

export default function TestimonialSection() {

  const [index,setIndex] = useState(0)

  const nextSlide = ()=>{
    setIndex((prev)=>(prev+1)%testimonials.length)
  }

  const prevSlide = ()=>{
    setIndex((prev)=>(prev-1+testimonials.length)%testimonials.length)
  }

  useEffect(()=>{
    const autoSlide = setInterval(()=>{
      nextSlide()
    },5000)

    return ()=> clearInterval(autoSlide)
  },[])

  return (

<section className="relative w-full py-24 px-8 lg:px-20 bg-[#faf7f2]">


 {/* WHITE SECTION */}
        <div className="absolute bottom-6 left-0 w-full h-[130px] z-10 flex justify-center items-start">
          <Image
            src="/zigzag2.png"
            alt=""
            fill
            className="mt-8 w-full"
          />
        </div>


<div className="w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">









  <div className="relative h-[700px] rounded-[10px] overflow-hidden">
  <video
    src="/video.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
</div>

{/* LEFT SIDE TESTIMONIALS */}

<div>

<p className="text-xs tracking-[0.35em] uppercase text-gray-500 mb-3">
Testimonials
</p>

<h2 className="text-4xl md:text-5xl font-semibold mb-10">
What Our Clients Say
</h2>

<div className="relative overflow-hidden">

<div
className="flex transition-transform duration-700 ease-in-out"
style={{transform:`translateX(-${index*100}%)`}}
>

{testimonials.map((item)=>(
<div key={item.id} className="min-w-full">

<div className="bg-white p-10 rounded-2xl shadow-lg">

<div className="text-yellow-500 text-lg mb-3">
{"★".repeat(item.rating)}
</div>

<h3 className="font-semibold text-xl mb-4">
{item.title}
</h3>

<p className="text-gray-600 leading-relaxed">
“{item.text}”
</p>

</div>

</div>
))}

</div>

{/* controls */}

<div className="flex gap-3 mt-8">

<button
onClick={prevSlide}
className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
>
←
</button>

<button
onClick={nextSlide}
className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-300 hover:bg-black hover:text-white transition"
>
→
</button>

</div>

</div>

</div>

{/* RIGHT SIDE IMAGE */}



</div>

</section>

  )
}