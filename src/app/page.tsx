"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Carousel from "@/components/ui/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaX,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Features", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    { content: "Working in an NGO, I often have to deal with various currencies. Grey's virtual account has simplified these transactions immensely. It's a reliable and convenient financial tool, too.", person: "Paul Mark", position: "CEO, Agora" },
    { content: "As a freelancer working with clients globally, Grey’s virtual foreign account has made receiving payments so much easier. No more currency headaches and the fees are surprisingly low!", person: "David Leichester", position: "Tutor" },
    { content: "As someone who’s always on the move, Grey’s virtual foreign account fits my lifestyle perfectly. Easy access to my funds in different currencies, all in one app - it’s brilliant!", person: "Phil Mark", position: "Banker, State Bank" },
    { content: "I regularly deal with clients from different countries, and Grey has simplified my financial transactions incredibly. The ability to handle various currencies without worrying about exchange rates is fantastic.", person: "Mick Vale", position: "Finance Manager" },
    { content: "As a freelancer working with clients globally, Grey’s virtual foreign account has made receiving payments so much easier. No more currency headaches and the fees are surprisingly low!", person: "David Leichester", position: "Tutor" },
    { content: "As someone who’s always on the move, Grey’s virtual foreign account fits my lifestyle perfectly. Easy access to my funds in different currencies, all in one app - it’s brilliant!", person: "Phil Mark", position: "Banker, State Bank" },
  ]

  return (
    <div>
      <header className="fixed left-0 inset-x-0 top-0 z-50 bg-white lg:px-14">
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-black text-4xl font-bold">Bankr</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 mr-4"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>

            <button className=" bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
              Get started - it's free
            </button>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-black text-3xl font-bold">Bankr</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>

                  <button className=" bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700">
                    Get started - it's free
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <section className="bg-gray-100 py-16 mt-10">
        <div className="container mx-auto flex flex-col lg:flex-row items-center h-auto md:h-[100vh] px-10 lg:px-[4%]">
          <div className="lg:w-2/3 lg:pr-8 text-center lg:text-left px-10 mt-10 lg:mt-0">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-10 max-w-[600px]">
              The bank account for modern professionals
            </h1>
            <p className="text-gray-800 text-lg mb-12 max-w-[500px]">
              Open a free foreign bank account to receive payments globally. No
              minimum deposits required.
            </p>
            <a
              href="#get-started"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>

          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <center>
              {" "}
              <img src="/hand1.png" alt="Hero Image" className="h-500" />
            </center>
          </div>
        </div>
      </section>

      {/* <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Introducing the best social platform for futo students.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome To Bankr
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
           Connect with futo students. Join our community and empower your social life and academic journey with FutoHub.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
          

      </div> */}

      <section>
        <div></div>
        <h1 className="text-3xl md:text-5xl font-bold text-center md:max-w-[70%] mx-auto my-14">
          Join the professionals who trust Bankr with their banking needs
        </h1>

        <Carousel slides={SLIDES} options={OPTIONS} />
      </section>

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
                <a href=""><FaXTwitter/></a>
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
          <h2 className="text-3xl font-bold mr-20 mb-8">Bankr</h2>
          <p>
          Bankr is a financial technology company, not a bank. Banking services
            are provided by licensed banking partners. Canadian services are
            offered by Aboki Finance Inc with registered address at 1285 West
            Broadway Suite 600 Vancouver BC V6H 3X8. Canada.{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}
