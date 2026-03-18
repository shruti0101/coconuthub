"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection(){

  const products = [
    { name: "Dates", img: "/products/dates.png" },
    { name: "Nuts", img: "/products/nuts.png" },
    { name: "Dry fruits", img: "/products/dryfruits.png" },
    { name: "Spices", img: "/products/spices.png" },
    { name: "Maamoul", img: "/products/maamoul.png" },
    { name: "Chocolate", img: "/products/chocolate.png" },
    { name: "Honey", img: "/products/honey.png" },
  ]

  const cardsRef = useRef([])
  const sliderRef = useRef(null)

  const sectionRef = useRef(null)
  const img1 = useRef(null)
  const img2 = useRef(null)
  const textRef = useRef(null)

  const floatTweens = useRef([])

  const loopProducts = [...products, ...products]

  useEffect(() => {

    const ctx = gsap.context(() => {

      /* floating cards */
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        const tween = gsap.to(card.querySelector(".product-img"), {
          y: -12,
          duration: 2 + (i % products.length) * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        })

        floatTweens.current.push(tween)
      })

      /* infinite slider */
      gsap.to(sliderRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      })

      /* ABOUT SCROLL ANIMATION (NO PIN) */
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: sectionRef.current,
          start:"top top",
          end:"+=1200",
          scrub:1.2,
          invalidateOnRefresh:true
        }
      })

      tl.to({}, {duration:1})

      tl.to([img1.current,img2.current],{
        x:-850,
        y:-10,
        rotation:360,
        scale:1.5,
        ease:"none",
        duration:3
      })

      tl.to(textRef.current,{
        x:-500,
        opacity:0,
        ease:"none",
        duration:3
      },"<")

      tl.to(img1.current,{
        opacity:0,
        scale:1.7,
        duration:1,
        ease:"power2.out"
      },"-=1.3")

      tl.to(img2.current,{
        opacity:1,
        scale:1.5,
        duration:1,
        ease:"power2.out"
      },"<")

    }, sectionRef)

    return () => {
      floatTweens.current.forEach(t => t.kill())
      ctx.revert()
    }

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
    <>
    
    {/* ✅ STICKY SECTION */}
    <section
      ref={sectionRef}
      style={{backgroundImage:"url(/aboutbg.png)"}}
      className="relative bg-[#f5efe5] h-[1600px] bg-cover bg-center"
    >

      <div className="sticky top-15 h-screen flex items-center">

        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-16 items-center px-8">

          <div ref={textRef}>
            <h1 className="text-5xl md:text-6xl font-heading mb-6">
              Premium Quality Dry Fruits & Dates Supplier
            </h1>

            <p className="text-lg text-black leading-relaxed max-w-xl">
            Established in 1991, Vishal Enterprise has grown into a trusted name in the wholesale and retail trading of Semi Husked Coconuts, Whole Husked Coconuts, Wet Dates, Seedless Dates, Premium Emirates Dates, Mixed Dry Fruits, Dry Figs, Dry Apricots, and Sweet Tamarind. With over three decades of experience, we are committed to delivering premium quality products, ensuring superior freshness, taste, and consistency. Our strong focus on quality assurance and customer satisfaction has helped us build long-lasting business relationships, making Vishal Enterprise a reliable destination for dates, dry fruits, and coconuts.
            </p>
          </div>

          <div className="relative h-[550px]">

            <div ref={img1} className="absolute right-0 top-0 z-30">
              <Image  
                src="/aboutimg2.png"
                width={3000}
                height={2000}
                className="object-cover w-[1200px]"
                alt=""
              />
            </div>

            <div ref={img2} className="absolute right-0 top-0 opacity-0 z-50">
              <Image
                src="/aboutimg.png"
                width={2000}
                height={2000}
                className="object-contain w-[700px]"
                alt=""
              />
            </div>

          </div>

        </div>

      </div>

    </section>

    {/* PRODUCTS */}
    <section
      style={{ backgroundImage: "url(/productbg.png)" }}
      className="w-full bg-center bg-cover py-20"
    >
      <div className="max-w-[1400px] mx-auto px-6">

        <h2 className="text-white text-center text-[52px] font-semibold">
          Our Products
        </h2>

        <p className="text-white/80 text-center mt-3 text-lg">
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
                <div className="relative w-[120px] h-[120px] product-img">
                  <Image src={item.img} alt={item.name} fill className="object-contain"/>
                </div>

                <p className="mt-6 text-[22px] font-medium text-[#333]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>

    </>
  )
}