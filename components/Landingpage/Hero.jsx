import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden -mt-[150px]">

      {/* VIDEO WRAPPER */}
      <div className="relative w-full lg:h-[110vh] h-[100vh]">

        {/* ✅ MOBILE VIDEO */}
        <video
          src="/datesvideo1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover block lg:hidden"
        />

        {/* ✅ DESKTOP VIDEO */}
        <video
          src="/datesvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover hidden lg:block"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>

      </div>

    </section>
  );
};

export default Hero;