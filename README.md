This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

// "use client"

// import Image from "next/image"
// import { useRef, useEffect } from "react"
// import gsap from "gsap"

// export default function Hero() {

//   const cups = useRef([])


// useEffect(() => {

//   const positions = [
//     { x: -190, y: 0, scale: 1.35, zIndex: 3 },
//     { x: 60, y: 45, scale: 1.25, zIndex: 2 },
//     { x: 280, y: 90, scale: 1.15, zIndex: 1 }
//   ]

//   gsap.set(cups.current,{
//     transformPerspective:1400,
//     transformOrigin:"center center",
//     willChange:"transform",
//     force3D:true
//   })

//   cups.current.forEach((cup,i)=>{
//     gsap.set(cup, positions[i])
//   })

//   const tl = gsap.timeline({ repeat:-1 })

//   tl.add(()=>{

//     const front = cups.current[0]

//     gsap.to(front,{
//       z:250,
//       scale:1.45,
//       duration:0.65,
//       ease:"power3.out"
//     })

//     gsap.to(front,{
//       y:600,
//       duration:1.05,
//       delay:0.6,
//       ease:"power3.in"
//     })

//   })

//   tl.add(()=>{

//     const front = cups.current.shift()
//     cups.current.push(front)

//     gsap.set(front,{
//       y:positions[2].y,
//       x:positions[2].x,
//       scale:positions[2].scale,
//       z:0
//     })

//     cups.current.forEach((cup,i)=>{
//       gsap.to(cup,{
//         ...positions[i],
//         duration:1,
//         ease:"power3.out"
//       })
//     })

//   },"+=2.1")

// },[])

//   return (

//     <section style={{backgroundImage:"url(/whychoosebg.webp)"}} className="relative h-[120vh] bg-center bg-cover flex items-center overflow-hidden">

//       <div className="w-full mx-auto grid grid-cols-2  px-10">

//         <div className="text-black space-y-5">

//           <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
//             Why Choose Vishal Enterprise for Varieties of Dates
//           </h2>

//           <p>
//             <strong className="font-bold text-xl">Premium Sourcing</strong> - 
//             At Vishal Enterprise, our coconuts, dates, and dry fruits are carefully sourced from trusted farms and suppliers to ensure superior quality and freshness.
//           </p>

//           <p>
//             <strong className="font-bold text-xl">Strict Quality Selection</strong> - 
//             Every product undergoes thorough inspection and grading based on size, texture, and freshness to maintain optimum quality standards.
//           </p>

//           <p>
//             <strong className="font-bold text-xl">Hygienic Processing</strong> -
//             We follow clean and hygienic handling practices to preserve the natural taste, purity, and nutritional value of our products.
//           </p>

//           <p>
//             <strong className="font-bold text-xl">Wide Product Range</strong> -
//             We offer a diverse selection including Semi Husked Coconuts, Whole Husked Coconuts, Wet Dates, Seedless Dates, Premium Emirates Dates, Mixed Dry Fruits, Dry Figs, Dry Apricots, and Sweet Tamarind to meet varied customer needs.
//           </p>

//           <p>
//             <strong className="font-bold text-xl">Customized Packaging Solutions</strong> - 
//             Flexible bulk and retail packaging options ensure safe delivery and complete customer satisfaction.
//           </p>

//       <p>
//             <strong className="font-bold text-xl">Strong Quality Commitment
// .</strong> - 
//            With dedicated quality control measures at every stage, we ensure consistent excellence and long-term business relationships
//           </p>

       

//         </div>

//         <div className="relative h-[600px] w-full flex items-center justify-end pr-26">

//           <div ref={el=>{if(el)cups.current[0]=el}} className="absolute">
//             <Image src="/testimg2.webp" width={360} height={420} alt="" />
//           </div>

//           <div ref={el=>{if(el)cups.current[1]=el}} className="absolute">
//             <Image src="/testimg3.webp" width={360} height={420} alt="" />
//           </div>

//           <div ref={el=>{if(el)cups.current[2]=el}} className="absolute">
//             <Image src="/testimg.webp" width={360} height={420} alt="" />
//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }


