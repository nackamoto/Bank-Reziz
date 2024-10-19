import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="text-white ">
    <div className="bg-[#10141a] p-8 md:p-20">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center md:max-w-[50%] mx-auto mb-14">
          Start receiving your foreign payments the easy way
        </h2>

        <div className="flex text-center gap-4 justify-center mb-10">
          <Image
            src={"/googleplay.webp"}
            width={150}
            height={30}
            alt="google play"
          ></Image>
          <Image
            src={"/appstore.webp"}
            width={150}
            height={30}
            alt="appstore"
          ></Image>
        </div>
      </div>

      <hr />

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <p className="mb-4">
            <b>CONTACT US</b>
          </p>

          <p className="text-blue-500 mb-4">hello@bankr.com</p>

          <p className="flex gap-2 text-xl">
            {" "}
            <a href="">
              <FaInstagram />
            </a>{" "}
            <a href="">
              <FaYoutube />
            </a>{" "}
            <a href="">
              <FaFacebook />
            </a>{" "}
            <a href=""><FaXTwitter /></a>
          </p>
        </div>

        <div>
          <p className="mb-4">
            <b>PRODUCTS</b>
          </p>

          <Link href="#" className="block mb-2 text-sm text-gray-400">
            {" "}
            Money transfer
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            Virtual cards
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            Currency exchange
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            Foreign accounts
          </Link>
        </div>

        <div>
          <p className="mb-4">
            <b>COMPANY</b>
          </p>

          <Link href="#" className="block mb-2 text-sm text-gray-400">
            {" "}
            About Us
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            Blog
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            Currency exchange
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            Contact
          </Link>
        </div>

        <div>
          <p className="mb-4">
            <b>SUPPORT</b>
          </p>

          <Link href="#" className="block mb-2 text-sm text-gray-400">
            {" "}
            Help center
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            FAQ
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            Privacy Policy
          </Link>
          <Link href="#" className="block mb-2 text-sm text-gray-400">
            Terms of Dervice
          </Link>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 bg-[#0c1015] p-8 md:p-16 md:flex justify-between">
      <h2 className="text-3xl font-bold md:mr-32  mb-8 flex items-center"> <Image src={"/logo.png"} width={40} height={30} className='mr-2' alt="logo"/> Bankr</h2>
      <p>
      Bankr is a financial technology company, not a bank. Banking services
        are provided by licensed banking partners. We are providing fintech app services to our users.
      </p>
    </div>
  </footer>
  )
}

export default Footer