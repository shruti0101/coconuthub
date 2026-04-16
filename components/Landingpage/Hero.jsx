import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden -mt-[150px]">

      {/* VIDEO WRAPPER */}
      <div className="relative w-full lg:h-[120vh] h-[100vh]">

        {/* ✅ MOBILE VIDEO */}
        <video
          src={"https://res.cloudinary.com/dqllcskwa/video/upload/v1774518039/datesvideo1_vxoyqi.mp4"}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover block lg:hidden"
        />

        {/* ✅ DESKTOP VIDEO */}
        <video
          src={"https://res.cloudinary.com/dqllcskwa/video/upload/v1774516217/datesvideo_ct7mgs.mp4"}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35 z-10"></div>

        {/* 🔥 CONTENT ABOVE VIDEO */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          
          <div className="max-w-4xl mt-20">
            
            <h1 className="text-white font-bold leading-tight text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Trusted Dates Supplier in India for Fresh & Bulk Supply
            </h1>

            <p className="text-white/90 mt-4 text-sm sm:text-base md:text-lg">
              Your Reliable Dates Supplier in India – Freshness Delivered Daily
            </p>

            <p className="text-white/80 mt-2 text-sm sm:text-base md:text-lg">
              Leading Dates Supplier in India, Delivering Freshness You Can Trust
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;