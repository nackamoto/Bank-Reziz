"use client";



import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import Header from "@/components/Home/Header";
import Testimonials from "@/components/Home/Testimonials";
import Features from "@/components/Home/Features";
import ManyFeatures from "@/components/Home/ManyFeatures";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {


  useEffect(() => {
    AOS.init({ duration: 1500 }); // duration is the animation duration in milliseconds
  }, []);

  return (
    <div>
      
      <Header/>

      <HeroSection/>

      <Features/>

      <ManyFeatures/>
      
      <Testimonials/>

      <Footer/>
    </div>
  );
}
