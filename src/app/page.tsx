"use client";



import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import Header from "@/components/Home/Header";
import Testimonials from "@/components/Home/Testimonials";
import Features from "@/components/Home/Features";
import ManyFeatures from "@/components/Home/ManyFeatures";

export default function Home() {

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
