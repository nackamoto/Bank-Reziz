import React from 'react'
import Carousel from "@/components/ui/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const Testimonials = () => {

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    { content: "Working in an NGO, I often have to deal with various currencies. Bankr's virtual account has simplified these transactions immensely. It's a reliable and convenient financial tool, too.", person: "Paul Mark", position: "CEO, Agora" },
    { content: "As a freelancer working with clients globally, Bankr’s virtual foreign account has made receiving payments so much easier. No more currency headaches and the fees are surprisingly low!", person: "David Leichester", position: "Tutor" },
    { content: "As someone who’s always on the move, Bankr’s virtual foreign account fits my lifestyle perfectly. Easy access to my funds in different currencies, all in one app - it’s brilliant!", person: "Phil Mark", position: "Banker, State Bank" },
    { content: "I regularly deal with clients from different countries, and Bankr has simplified my financial transactions incredibly. The ability to handle various currencies without worrying about exchange rates is fantastic.", person: "Mick Vale", position: "Finance Manager" },
    { content: "As a freelancer working with clients globally, Bankr’s virtual foreign account has made receiving payments so much easier. No more currency headaches and the fees are surprisingly low!", person: "David Leichester", position: "Tutor" },
    { content: "As someone who’s always on the move, Bankr’s virtual foreign account fits my lifestyle perfectly. Easy access to my funds in different currencies, all in one app - it’s brilliant!", person: "Phil Mark", position: "Banker, State Bank" },
  ]

  return (
    <section className='py-28'>
    <h1 className="text-3xl md:text-5xl font-bold text-center md:max-w-[70%] mx-auto mb-20">
      Join the professionals who trust Bankr with their banking needs
    </h1>

    <Carousel slides={SLIDES} options={OPTIONS} />
  </section>
  )
}

export default Testimonials