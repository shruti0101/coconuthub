import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";
import Countup from "@/components/Landingpage/Countup";
import Cta from "@/components/Landingpage/Cta";
import Whoweare from "@/components/Landingpage/Bestseller";
import Whychoose from "@/components/Landingpage/Whychoose";
import Process from "@/components/Landingpage/Process";
import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";
import Formsection from "@/components/Landingpage/Formsection";
import Popup from "@/components/Popup";
import CityPage from "../components/City";
import Quality from "@/components/Landingpage/Quality";
import Bestseller from "@/components/Landingpage/Bestseller";
import HealthBenefits from "@/components/Landingpage/Benefits";
import Citeskeyword from "@/components/Citieskeyword";
import Ctaform from "@/components/Landingpage/CtaForm";
import FeaturedProducts from "@/components/Landingpage/Featuredprod";



export default function Home() {
  return (
    <>
      {/* <Popup></Popup>  */}
      <Hero />
        <Categories />
        <Ctaform></Ctaform>
        <FeaturedProducts></FeaturedProducts>
      <About />
           <Process></Process>
      <Countup />
      <Quality></Quality>
    <Bestseller></Bestseller>
       <Whychoose />
     

     
   
 
      {/* <Faq></Faq>
      <Formsection></Formsection>
      <CityPage /> */}
      <HealthBenefits></HealthBenefits>
       <Cta></Cta>
      <TestimonialSlider></TestimonialSlider>
      <Citeskeyword/>
    </>
  );
}
