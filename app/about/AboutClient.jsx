import Image from "next/image";
import { FaAward, FaRocket, FaAtom } from "react-icons/fa";
import Link from "next/link";
import Cta from "@/components/Landingpage/Cta";

const page = () => {

  const values = [
    {
      title: "Premium Quality Products",
      text: "We carefully source our dates, coconuts, and dry fruits from trusted farms and suppliers to ensure superior freshness, rich taste, and high nutritional value.",
      img: "/aboutwhy.png",
    },
    {
      title: "Wide Product Selection",
      text: "Our diverse product range includes Wet Dates, Seedless Dates, Premium Emirates Dates, Semi Husked Coconuts, Whole Husked Coconuts, Dry Figs, Dry Apricots, Mixed Dry Fruits, and Sweet Tamarind to meet customer needs.",
      img: "/aboutimg.png",
    },
    {
      title: "Hygienic Handling & Storage",
      text: "All products are handled and stored using clean and hygienic practices to maintain natural flavor, freshness, and product quality.",
      img: "/aboutwhy.webp",
    },
    {
      title: "Competitive Wholesale Pricing",
      text: "We offer cost-effective wholesale pricing without compromising on quality, making us a preferred supplier for retailers and bulk buyers.",
      img: "/aboutwhy2.webp",
    },
  ]


      const mission = [
      {
        title: "Our Mission",
        text: "Our mission at Vishal Enterprise is to provide premium quality dates, dry fruits, and coconuts sourced from trusted suppliers while maintaining the highest standards of freshness, hygiene, and consistency. We aim to deliver reliable wholesale solutions, competitive pricing, and exceptional customer service that supports the success and satisfaction of our retailers, distributors, and bulk buyers.",
        bg: "/3.webp",
      },
      {
        title: "Our Goal",
        text: "The Goal of Vishal Enterprise lies in its more than three decades of industry experience, strong supplier network, and commitment to delivering premium quality products. Since our establishment in 1991, we have built long-term relationships with trusted farmers and suppliers, allowing us to consistently source high-quality dates, coconuts, and dry fruits that meet the expectations of our customers.",
        bg: "/2.webp",
      },
      {
        title: "Our Vision",
        text: "Our vision is to become a leading and most trusted dates wholesaler and dry fruits supplier, recognized for quality, reliability, and long-term partnerships. We strive to continuously expand our product range, strengthen our supply network, and deliver superior value to customers across markets while maintaining our commitment to quality and trust.",
        bg: "/1.webp",
      },
    ];


  return (
    <div>

   <section
  style={{ backgroundImage: "url('/1000_F_1913629521_E8ZMNY2PebeCBKsxw4zj9quHx1ovOhY4.jpg')" }}
  className="relative w-full bg-cover bg-center h-[350px] md:h-[400px] lg:h-[550px]"
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* Centered Text */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-white mt-15 md:mt-0 text-3xl sm:text-4xl md:text-6xl font-bold z-10 text-center leading-tight">
      About us
    </h2>
  </div>
</section>



    <section className="bg-[#f5efe6] py-20">

      <div className="w-full mx-auto px-13 grid lg:grid-cols-2 gap-16 items-center">


        {/* RIGHT CONTENT */}
        <div>

          <p className="text-[#137a74] font-semibold uppercase tracking-wide mb-2">
            About Vishal Enterprise
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Your Trusted Dates Wholesaler Since 1991
          </h2>

          <p className="text-black leading-relaxed mb-2 text-lg">
            Established in 1991, Vishal Enterprise has built a strong reputation as a trusted dates wholesaler and dry fruits supplier. With over three decades of experience in the industry, we specialize in the wholesale and retail supply of premium dates, coconuts, and dry fruits, serving retailers, distributors, and bulk buyers with consistent quality and dependable service.
          </p>

          <p className="text-black leading-relaxed mb-5 text-lg">
            We offer a wide range of carefully sourced products including Wet Dates, Seedless Dates, Premium Emirates Dates, Semi Husked Coconuts, Whole Husked Coconuts, Mixed Dry Fruits, Dry Figs, Dry Apricots, and Sweet Tamarind. Our products are selected from reliable farms and suppliers to ensure superior freshness, rich taste, and high nutritional value.
             At Vishal Enterprise, customer satisfaction is at the core of everything we do. Our commitment to quality assurance, competitive wholesale pricing, and timely delivery has helped us build long-term relationships with our clients.
          </p>

         

          {/* CTA */}
          <div className="">
            <button className="bg-[#137a74] text-white px-8 py-4 rounded-xl text-lg hover:bg-[#0f5f5a] transition">
              Explore Our Products
            </button>
          </div>

        </div>


        
        {/* LEFT IMAGE */}
        <div className="relative">

          <div className="rounded-[30px] overflow-hidden shadow-xl">
            <Image
              src="/1000_F_1008535121_sRLrqyDqLSnvACHVfkQmMTc6BezQXvXr.jpg" // 👉 replace with your image
              width={800}
              height={400}
              alt="Vishal Enterprise"
              className="object-cover w-full h-full"
            />
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-8 -left-8 bg-white px-6 py-4 rounded-2xl shadow-lg">
            <p className="text-2xl font-bold text-[#137a74]">30+ Years</p>
            <p className="text-sm text-gray-600">of Experience</p>
          </div>

        </div>

      </div>

    </section>


{/* why choose */}

   <section className="relative py-20 bg-[#137a74] overflow-hidden">

      {/* Background Palm Images */}
      <Image
        src="/aboutpalm.png"
        width={300}
        height={300}
        alt=""
        className="absolute left-10 top-10 opacity-40"
      />

      <Image
        src="/aboutpalm.png"
        width={300}
        height={300}
        alt=""
        className="absolute right-10 top-10 opacity-40"
      />

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-semibold">
         Why Choose Vishal Enterprise
        </h2>

        <p className="text-white mt-4 text-lg">
       With over 10 years of experience, Vishal Enterprise has earned a strong reputation as a reliable dates wholesaler and dry fruits supplier, known for quality and consistency.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-14">

          {values.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[30px] px-6 py-8 text-center shadow-md hover:shadow-xl transition"
            >

              <h3 className="text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>

              <p className="text-md text-black   leading-relaxed mb-6">
                {item.text}
              </p>

              {/* Circle Image */}
              <div className="flex justify-center">
                <div className="relative w-[200px] h-[200px] rounded-full border-[6px] border-[#e6e6e6] flex items-center justify-center">

                  <div className="absolute inset-2 rounded-full border border-gray-200"></div>

                  <Image
                    src={item.img}
                    alt=""
                    width={190}
                    height={150}
                    className="object-cover rounded-full"
                  />

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>

{/* mission vision */}
     
<section className="w-full py-16 bg-[#f5f5f5]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8">

      {mission.map((item, i) => (
        <div
          key={i}
          className="relative rounded-[24px] p-10 h-[340px] flex flex-col justify-center overflow-hidden bg-[#ead7ad]/50"
        >

          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={item.bg}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <h3 className="text-[26px] font-semibold text-[#0f766e] mb-2 relative z-10">
            {item.title}
          </h3>

          <p className="text-[15px]  text-black relative z-10">
            {item.text}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>
  




   <Cta></Cta>

   {/* exp */}

    <section className="h-screen relative">

      {/* GIF Background */}
      <Image
        src="/gif.gif"
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <p className="text-white leading-relaxed text-3xl md:text-6xl font-bold text-center">
          VISHAL ENTERPRISE  <br />
          30+ Years of Experience
        </p>
      </div>

    </section>
    </div>
  );
};

export default page;
