"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Brain, Eye, Zap, Apple, Bone, Droplets, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: Bone, title: "Supports Bone Strength", desc: "Dates are rich in calcium, magnesium, and phosphorus that help maintain strong bones." },
  { icon: Eye, title: "Enhances Vision", desc: "Packed with antioxidants that support eye health." },
  { icon: Zap, title: "Natural Energy Booster", desc: "Natural sugars provide instant and sustained energy." },
  { icon: Apple, title: "Healthy Sugar Alternative", desc: "Dates are a natural substitute for refined sugar." },
  { icon: Brain, title: "Strengthens Brain Function", desc: "Flavonoids contribute to improved brain health." },
  { icon: Droplets, title: "Boosts Iron Levels", desc: "Helps maintain healthy hemoglobin levels." },
  { icon: Heart, title: "Promotes Heart Health", desc: "Potassium supports cardiovascular wellness." },
  { icon: Activity, title: "Improves Digestion", desc: "High fiber promotes gut health." },
];

export default function HealthBenefits() {

  const sectionRef = useRef(null);
  const leftTree = useRef(null);
  const rightTree = useRef(null);

useEffect(() => {

  gsap.set([leftTree.current, rightTree.current], { autoAlpha: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom top",
      scrub: true,

      onEnter: () => gsap.set([leftTree.current, rightTree.current], { autoAlpha: 1 }),
      onEnterBack: () => gsap.set([leftTree.current, rightTree.current], { autoAlpha: 1 }),

      onLeave: () => gsap.set([leftTree.current, rightTree.current], { autoAlpha: 0 }),
      onLeaveBack: () => gsap.set([leftTree.current, rightTree.current], { autoAlpha: 0 }),
    }
  });

  // enter animation
  tl.fromTo(
    leftTree.current,
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, ease: "power3.out" },
    0
  );

  tl.fromTo(
    rightTree.current,
    { x: 200, opacity: 0 },
    { x: 0, opacity: 1, ease: "power3.out" },
    0
  );

  // parallax
  tl.to(leftTree.current, { y: 120, ease: "none" }, 0);
  tl.to(rightTree.current, { y: 120, ease: "none" }, 0);

  // exit
  tl.to([leftTree.current, rightTree.current], {
    opacity: 0,
    y: 200,
    ease: "power2.out",
  }, 0.8);

}, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-white via-amber-50/40 to-white overflow-hidden"
    >

{/* <div className="absolute inset-0 -top-30  pointer-events-none">
  <Image
    src="/zigzag2.png"
    alt="zigzag"
    width={2000}
    height={1000}
    className="object-cover"
  />
</div> */}
      {/* LEFT TREE */}
      <div
        ref={leftTree}
        className="hidden lg:block fixed left-0 top-40 z-10 pointer-events-none"
      >
        <Image
          src="/tree-left.webp"
          alt="Palm Tree"
          width={230}
          height={600}
          className="object-cover"
        />
      </div>

      {/* RIGHT TREE */}
      <div
        ref={rightTree}
        className="hidden lg:block fixed right-0 top-40 z-10 pointer-events-none"
      >
        <Image
          src="/tree-right.webp"
          alt="Palm Tree"
          width={230}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900">
            Health Benefits of <span className="text-amber-600">Dates</span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Dates are packed with essential nutrients, antioxidants,
            and natural sugars that support overall health and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">

          {benefits.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="py-10 px-6 border-b border-gray-200 lg:border-r last:border-r-0"
              >
                <div className="flex items-start gap-4">

                  <div className="text-amber-600">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}