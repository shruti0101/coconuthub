"use client"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // connect GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

  }, [])

  return children
}