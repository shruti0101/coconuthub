"use client";
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
gsap.registerPlugin(ScrollTrigger)

export default function ProductSlider() {
    const sliderRef = useRef(null)
    const cardsRef = useRef([])

    const products = [
        { name: "Ajwa Dates", img: "/product/ajwaJar.webp", },
        { name: "Fard Dates", img: "/product/fardDates1.webp" },
        { name: "Kimia Gold", img: "/product/kimiaKgold.webp" },
        { name: "California Almonds", img: "/product/CaliforniaAlmondsRoasted.webp" },
        { name: "Apricot", img: "/product/apricotDiredTurkel.webp" },
        { name: "Chocolate Dates", img: "/product/chocolateAlRaiqa.webp" },
        { name: "Cashew Nuts", img: "/product/cashewNut500g.webp" },
    ]

    const loopProducts = [...products, ...products]

    useEffect(() => {
        //     /* infinite slider */
        gsap.to(sliderRef.current, {
            xPercent: -50,
            ease: "none",
            duration: 20,
            repeat: -1,
        })
    }, [])

    const magneticMove = (e, el) => {
        const rect = el.getBoundingClientRect()

        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(el, {
            x: x * 0.15,
            y: y * 0.15,
            duration: 0.4,
            ease: "power2.out",
        })
    }

    const resetMagnet = (el) => {
        gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.5,
        })
    }
    return (
        <section style={{ backgroundImage: "url(/productbg.png)" }}
            className="w-full bg-center bg-cover py-10"
        >
            <div className="max-w-[1400px] mx-auto px-6">
                <h2 className="text-white text-center text-3xl md:text-4xl font-semibold">
                    Our Products
                </h2>

                <p className="text-white/80 text-center text-lg">
                    Discover our exquisite product range
                </p>

                <div className="relative mt-16 overflow-hidden">
                    <div ref={sliderRef} className="flex gap-10 w-max">
                        {loopProducts.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => (cardsRef.current[i] = el)}
                                onMouseMove={(e) => magneticMove(e, e.currentTarget)}
                                onMouseLeave={(e) => resetMagnet(e.currentTarget)}
                                className="w-[250px] h-[250px] shrink-0 bg-[#E6D6B0] rounded-[40px] flex flex-col items-center justify-center shadow-xl cursor-pointer"
                            >
                                <div className="relative w-[200px] h-[200px] product-img">
                                    <Image src={item.img} alt={item.name} fill className="object-contain" />
                                </div>

                                <p className="mt-2 text-[22px] font-medium text-[#333]">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
