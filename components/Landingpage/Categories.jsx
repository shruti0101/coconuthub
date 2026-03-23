"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

export default function Categories() {

  const categories = [
    { name: "Ajwa Dates", img: "/slider/ajwadates.webp" },
    { name: "Chocolate Dates", img: "/slider/chocodate.webp" },
    { name: "Fard Dates", img: "/slider/farddates.webp" },
    { name: "Kalmi Dates", img: "/slider/kalmi.webp" },
    { name: "Rabbi Dates", img: "/slider/rabbi.webp" },
    { name: "Almonds", img: "/slider/almond.webp" },
    { name: "Cashew", img: "/slider/cashew.webp" },
    { name: "Apricot", img: "/slider/dry.webp" },
    { name: "Walnut", img: "/slider/walnut.webp" },
  ]

  return (
    <section className="py-10 bg-white relative">

      <div className="w-full mx-auto px-6">

        <h2 className="text-3xl font-semibold text-center mb-12 text-[#333]">
          Popular Categories
        </h2>

        {/* <Image alt="" width={200} height={100} className="absolute top-0 right-0" src="/catleave.webp">

      </Image> */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
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
            1024: { slidesPerView: 5 },
          }}
        >

          {categories.map((item, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="flex flex-col items-center group">

                {/* IMAGE CIRCLE */}
                <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">

                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain p-6"
                  />

                </div>

                {/* LABEL */}
                <div className="mt-4 bg-[#6BC900] text-white text-sm sm:text-base font-semibold px-5 py-1.5 rounded-full shadow-md whitespace-nowrap transition-all duration-300 group-hover:bg-black">
                  {item.name}
                </div>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  )
}