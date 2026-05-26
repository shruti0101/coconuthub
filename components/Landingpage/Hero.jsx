import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden -mt-[150px]">

      {/* VIDEO WRAPPER */}
      <div className="relative   w-full lg:h-[120vh] h-[85vh] md:h-[100vh]">

        {/* ✅ MOBILE VIDEO */}
        <video
          src={"https://pub-23a540a27a794d989108700989f15097.r2.dev/dates%201.mp4"}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover block lg:hidden"
        />

        {/* ✅ DESKTOP VIDEO */}
        <video
          src={"https://pub-23a540a27a794d989108700989f15097.r2.dev/Dates%20Video.mp4"}
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

            <p className="text-white mt-4 text-sm sm:text-base md:text-lg">
              Your Reliable Dates Supplier in India – Freshness Delivered Daily
            </p>

            <p className="text-white mt-2 text-sm sm:text-base md:text-lg">
              Leading Dates Supplier in India, Delivering Freshness You Can Trust
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;