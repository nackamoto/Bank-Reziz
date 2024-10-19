import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-[85%] mx-auto my-20">
      <h1 className="font-bold text-3xl lg:text-4xl mb-8 text-center">
        Amazing Features
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-[#2f0d59] rounded-2xl transition hover:cursor-pointer hover:shadow-xl p-4">
          <div className="p-6 pt-10">
            <h2 className="font-bold text-white text-2xl mb-2">
              Faster <br />
              payments
            </h2>

            <p className="text-gray-300 text-sm">
              Receive your foreign payments in an account you can access or
              withdraw from at any time.
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/features1.svg"
              alt="Feature 1"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="bg-[#f0f2f5] rounded-2xl transition hover:cursor-pointer hover:shadow-xl p-4">
          <div className="p-6 pt-10">
            <h2 className="font-bold text-2xl mb-2">
              No unnecessary
              <br />
              hassles
            </h2>

            <p className="text-gray-700 text-sm">
              An account where your employers never have to worry about your
              payments again.
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/features2.svg"
              alt="Feature 1"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="bg-[#1b1f28] rounded-2xl transition hover:cursor-pointer hover:shadow-2xl p-4">
          <div className="p-6 pt-10">
            <h2 className="font-bold text-white text-2xl mb-2">
            Credit from
              <br />
              your platforms
            </h2>

            <p className="text-gray-300 text-sm">
              An account where your employers never have to worry about your
              payments again.
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/features3.svg"
              alt="Feature 1"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Features;
