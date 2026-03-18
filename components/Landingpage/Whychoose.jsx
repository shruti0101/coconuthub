"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function DatesExplosion() {

  const sectionRef = useRef(null)
  const packetRef = useRef(null)

  const sealedRef = useRef(null)
  const openRef = useRef(null)

  const datesRef = useRef([])
  const floatAnim = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      datesRef.current = datesRef.current.slice(0)

      gsap.set(datesRef.current,{
        x:0,
        y:40,
        scale:0.7,
        rotation:0,
        opacity:0,
        force3D:true,
        transformPerspective:800,
        willChange:"transform"
      })

      const spreadValues = datesRef.current.map(()=>({
        x: gsap.utils.random(-260,260),
        y: gsap.utils.random(-420,-320),
        rot: gsap.utils.random(-160,160),
        scale: gsap.utils.random(0.85,1.25)
      }))

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: sectionRef.current,
          start:"top top",
          end:"+=1200",
          scrub:1,
          invalidateOnRefresh:true,
          onLeave: startFloating,
          onEnterBack: stopFloating
        }
      })

      tl.to(packetRef.current,{
        rotation:-8,
        scale:1.05,
        transformOrigin:"center bottom",
        ease:"power2.out"
      })

      tl.to(sealedRef.current,{
        opacity:0,
        duration:0.35
      },"<")

      tl.to(openRef.current,{
        opacity:1,
        duration:0.35
      },"<")

      tl.to(datesRef.current,{
        opacity:1,
        x:(i)=>spreadValues[i].x,
        y:(i)=>spreadValues[i].y,
        rotation:(i)=>spreadValues[i].rot,
        scale:(i)=>spreadValues[i].scale,
        stagger:0.06,
        ease:"power3.out"
      },"<0.1")

      tl.to(datesRef.current,{
        y:(i)=>spreadValues[i].y + 40,
        rotation:(i)=>spreadValues[i].rot * 0.4,
        ease:"power2.out",
        stagger:0.04
      })

      function startFloating(){
        floatAnim.current = gsap.to(datesRef.current,{
          y:"+=14",
          rotation:"+=4",
          repeat:-1,
          yoyo:true,
          ease:"sine.inOut",
          duration:2.2,
          stagger:0.15
        })
      }

      function stopFloating(){
        if(floatAnim.current){
          floatAnim.current.kill()
        }
      }

    }, sectionRef)

    return () => {
      if(floatAnim.current){
        floatAnim.current.kill()
      }
      ctx.revert()
    }

  }, [])

  return (

    <section
      ref={sectionRef}
      className="relative h-[2500px] bg-[#f5efe6]"
    >

      {/* ✅ STICKY WRAPPER (REPLACES PIN) */}
      <div className="sticky top-15 h-screen flex items-center justify-center overflow-hidden">

        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-15">

          <div className="space-y-4">

            <h2 className="text-4xl font-semibold leading-tight">
              Why Choose Vishal Enterprise for Varieties of Dates
            </h2>

            <div className="space-y-4 text-black leading-relaxed text-[16px]">

              <p><strong>Premium Sourcing</strong> - Our coconuts, dates, and dry fruits are sourced from trusted farms ensuring quality and freshness.</p>

              <p><strong>Strict Quality Selection</strong> - Every product is inspected and graded for size, texture, and freshness.</p>

              <p><strong>Hygienic Processing</strong> - Clean handling preserves natural taste and nutritional value.</p>

              <p><strong>Wide Product Range</strong> - Semi Husked Coconuts, Whole Husked Coconuts, Wet Dates, Seedless Dates, Premium Emirates Dates and more.</p>

              <p><strong>Customized Packaging Solutions</strong> - Flexible bulk and retail packaging.</p>

              <p><strong>Advanced Storage Facilities</strong> - Storage systems maintain freshness and shelf life.</p>

            </div>

          </div>

          <div className="relative w-[520px] h-[420px] ml-10">

            <div
              ref={packetRef}
              className="absolute -bottom-30 z-20 w-[520px] h-[620px]"
            >

              <div ref={sealedRef} className="absolute inset-0">
                <Image
                  src="/testimg.webp"
                  width={4000}
                  height={2000}
                  alt="sealed packet"
                  priority
                  style={{objectFit:"cover"}}
                />
              </div>

              <div ref={openRef} className="absolute inset-0 opacity-0">
                <Image
                  src="/whychoose.png"
                  width={3000}
                  height={2000}
                  alt="opened packet"
                  priority
                  style={{objectFit:"cover"}}
                />
              </div>

            </div>

            {[
              "/ajwadates.webp",
              "/sukkaridates.webp",
              "/farddates.webp",
              "/mabroom.webp",
              "/mejdool.webp",
              "/Single-Dates-PNG.png",
              "/ajwadates.webp",
              "/date.png",
              "/ajwadates.webp",
              "/sukkaridates.webp",
              "/farddates.webp",
              "/date.png"
            ].map((img,i)=>(

              <div
                key={i}
                ref={(el)=>datesRef.current[i]=el}
                className="absolute bottom-0 left-[35%] z-30 opacity-0"
                style={{transform:"translateX(-50%)"}}
              >
                <Image
                  src={img}
                  width={110}
                  height={110}
                  alt="date"
                  draggable={false}
                />
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}