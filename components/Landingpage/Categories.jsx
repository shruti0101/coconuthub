"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

export default function Categories() {

  const categories = [
    { name: "Spices", img: "/cat-spices.jpg" },
    { name: "Dry Fruits", img: "/cat-dryfruits.jpg" },
    { name: "Fruits", img: "/cat-fruits.jpg" },
    { name: "Vegetables", img: "/cat-vegetables.jpg" },
    { name: "Grains", img: "/cat-grains.jpg" },
    { name: "Fruits", img: "/cat-fruits.jpg" },
    { name: "Vegetables", img: "/cat-vegetables.jpg" },
    { name: "Grains", img: "/cat-grains.jpg" },
  ]

  return (
    <section className="py-16 bg-white relative">

      <div className="w-full mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-12 text-[#333]">
          Popular Categories
        </h2>

      <Image alt="" width={200} height={100} className="absolute top-0 right-0" src="/catleave.webp">

      </Image>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}

         autoplay={{
  delay: 0,
  disableOnInteraction: false
}}
speed={3000}

          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >

          {categories.map((item, i) => (
            <SwiperSlide key={i}>

              <div className="flex justify-center">

                <div className="relative w-[170px] h-[170px]">

                  <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">

                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 bg-[#6BC900] text-white text-sm font-semibold px-4 py-1 rounded-full shadow">
                    {item.name}
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  )
}