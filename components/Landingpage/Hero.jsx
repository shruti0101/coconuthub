// "use client"

// import Image from "next/image"
// import { useRef, useEffect } from "react"
// import gsap from "gsap"

// export default function Hero() {

//   const cups = useRef([])
//   const sectionRef = useRef(null)
//   const colorIndex = useRef(0)

//   const bgColors = [
//     "#F8D866",
//     "#9B6A99",
//     "#5BB892"
//   ]

//   useEffect(() => {

//     const positions = [
//       { x:-130, y:-20, z:180, scale:1.65, rotateY:0, zIndex:3 },
//       { x:170, y:60, z:-80, scale:1.3, rotateY:-20, zIndex:2 },
//       { x:400, y:140, z:-220, scale:1.1, rotateY:-40, zIndex:1 }
//     ]

//     gsap.set(sectionRef.current,{
//       perspective:1600
//     })

//     gsap.set(cups.current,{
//       transformStyle:"preserve-3d",
//       force3D:true
//     })

//     cups.current.forEach((cup,i)=>{
//       gsap.set(cup, positions[i])
//     })

//     const tl = gsap.timeline({
//       repeat:-1,
//       defaults:{ ease:"power2.inOut" } // softer easing
//     })

//     /* FRONT IMAGE COMES TOWARDS CAMERA */
//     tl.to(cups.current[0],{
//       y:650,
//       z:400,
//       rotateY:0,
//       scale:1.9,
//       duration:2.2   // slower
//     })

//     tl.to({}, { duration:0.5 }) // small pause

//     tl.add(()=>{

//       const first = cups.current.shift()
//       cups.current.push(first)

//       cups.current.forEach((cup,i)=>{

//         gsap.to(cup,{
//           x:positions[i].x,
//           y:positions[i].y,
//           z:positions[i].z,
//           rotateY:positions[i].rotateY,
//           scale:positions[i].scale,
//           duration:1.8, // slower reposition
//           overwrite:true
//         })

//         gsap.set(cup,{ zIndex:positions[i].zIndex })

//       })

//       colorIndex.current = (colorIndex.current + 1) % bgColors.length

//       gsap.to(sectionRef.current,{
//         backgroundColor:bgColors[colorIndex.current],
//         duration:1.6
//       })

//     })

//   },[])

//   return (

//     <section
//       ref={sectionRef}
//       className="relative h-[120vh]  flex items-center overflow-hidden"
//       style={{ backgroundColor:"#F8D866" }}
//     >

//       <div className="max-w-7xl  mx-auto grid grid-cols-2 w-full px-10">

//         <div className="text-white space-y-6">
//           <h1 className="text-6xl font-extrabold leading-tight">
//             Taste Joy in <br/> Every Bite
//           </h1>
//         </div>

//         <div className="relative  w-full flex items-center justify-end pr-50">

//           <div ref={el=>{if(el)cups.current[0]=el}} className="absolute">
//             <Image src="/testimg2.webp" width={420} height={320} alt="" />
//           </div>

//           <div ref={el=>{if(el)cups.current[1]=el}} className="absolute">
//             <Image src="/testimg3.webp" width={420} height={320} alt="" />
//           </div>

//           <div ref={el=>{if(el)cups.current[2]=el}} className="absolute">
//             <Image src="/testimg.webp" width={420} height={320} alt="" />
//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }








import React from 'react'

const Hero = () => {
  return (
    <div>
    <section className="relative bg-[#F3F1F0] w-full h-[25vh]  -mt-[150px] md:h-[70vh]   xl:h-[125vh] overflow-hidden">
      
  
        <video
        
          src="/datesvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" max-w-full h-auto object-cover"
        />
    

<div className='absolute inset-0 bg-black/20'></div>

 

    </section></div>
  )
}

export default Hero