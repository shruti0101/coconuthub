"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TrustSection() {
  const sectionRef = useRef(null);
  const cashewRef = useRef(null);
  const datesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    // CASHEW (LEFT → CENTER + ROTATE 360)
    tl.fromTo(
      cashewRef.current,
      {
        x: -400,
        rotate: -360,
        opacity: 0,
      },
      {
        x: 0,
        rotate: 0,
        opacity: 1,
        ease: "none",
      },
      0,
    );

    // DATES (RIGHT → CENTER + ROTATE 360)
    tl.fromTo(
      datesRef.current,
      {
        x: 400,
        rotate: 360,
        opacity: 0,
      },
      {
        x: 0,
        rotate: 0,
        opacity: 1,
        ease: "none",
      },
      0,
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{backgroundImage:"url(/banner.webp)"}}
      className="relative py-[110px] overflow-visible bg-cover bg-center px-4"
    >
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/arabic-pattern.png')] bg-cover bg-center" />

      <div className="relative max-w-[1100px] mx-auto">
    <div className="relative bg-[#d4a43a] rounded-[36px] px-[80px] py-[60px] text-center shadow-xl overflow-visible">
          {/* CASHEW */}
          <div
            ref={cashewRef}
            className="lg:block hidden absolute left-1/2 -translate-x-1/2 -top-[340px]"
          >
            <Image
              src="/bowldate2.png"
              width={420}
              height={320}
              alt="Cashew Bowl"
              priority
            />
          </div>

<div className="relative">

          <h2 className="text-[42px] md:text-[48px] leading-[1.2] font-bold text-white">
            Irresistible Goodness
          </h2>
</div>

          <p className="mt-6 text-[16px] leading-[28px] text-white/90 max-w-[760px] mx-auto">
            Carefully sourced from the best growing regions and thoughtfully
            packed to preserve their natural freshness, our dry fruits and dates
            offer a perfect blend of rich taste and wholesome nutrition. Each
            product is selected with strict quality standards to ensure superior
            flavor, texture, and purity. From everyday snacking to special
            occasions, our premium range delivers the authentic goodness of
            nature in every bite.
          </p>
<button className="group relative mt-10 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full bg-black shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
  
  <span className="relative z-10">Explore Now</span>

  {/* shine effect */}
  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
    <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/40 blur-md animate-[shine_1.2s_ease]"></span>
  </span>

</button>


        </div>
      </div>
    </section>
  );
}
