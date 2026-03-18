"use client"

import Image from "next/image"

export default function Features() {
  const features = [
    {
      icon: "/featureicon/2.png",
      title: "PREMIUM QUALITY",
      text: "Carefully sourced and selected to deliver superior freshness and taste.",
    },
    {
      icon: "/featureicon/3.png",
      title: "NATURALLY FRESH",
      text: "Hygienically handled and stored to maintain natural flavor and quality.",
    },
    {
      icon: "/featureicon/4.png",
      title: "WIDE PRODUCT RANGE",
      text: "Offering a variety of coconuts, dates, and dry fruits to meet every need.",
    },
    {
      icon: "/featureicon/1.png",
      title: "TRUSTED & RELIABLE",
      text: "Committed to consistent quality and long-term customer satisfaction.",
    },
  ]

  return (
    <section
      className="py-20 text-center bg-cover bg-center "
      style={{
      backgroundImage:"url(/featureicon/bg.png)"
      }}
    >
      <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center">

            {/* Icon */}
            <div className="w-[100px] h-[100px] relative mb-6">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-[#047775] text-md tracking-[3px] font-semibold">
              {item.title}
            </h3>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-[#d4af37] my-4"></div>

            {/* Description */}
            <p className="text-black text-md leading-[24px] max-w-[220px]">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}