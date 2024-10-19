import Image from "next/image";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";


const features = ['100% digital signup', 'No account opening fees', 'Zero maintenance charges', 'An IBAN for business payments', 'Withdrawals to your local account', 'Account statements & proof of account', 'Generate payment invoices', 'Instant transaction notifications', 'Anti-fraud protection', 'Low transaction fees' ]

const ManyFeatures = () => {
  return (
    <div className="bg-[#14181f] py-20">
      <div>
        <div className="text-center my-10">
          <center>
            <Image
              src={"/logo.png"}
              width={50}
              height={40}
              alt="card"
              className="rounded-xl"
            />
          </center>
          <h2 className="font-bold text-2xl md:text-5xl text-white text-center mb-8 mt-4 p-4">
            {" "}
            Everything you get with <br />
            <span className="text-span-2">
              Bankr&#39;s foreign bank accounts
            </span>
          </h2>
        </div>

       <center> <div className="w-0.5 h-12 bg-gradient-to-b from-gray-300 to-gray-500 mb-10"></div></center>

       {/* bg-[#0f1218] */}

       <center>

       <div className="max-w-[90%] mx-auto mb-20">
        {features.map((feature, index) => (
            <div key={index} className="p-4 text-gray-200 border border-gray-700 rounded-full inline-flex items-center gap-2 mb-4 mr-4">
                 <PiStarFourFill className="text-purple-600"/> {feature}
            </div>
        ))}     
       </div>
       </center>

        <center>
          {" "}
          <div className="md:w-[50%]">
            <Image
              src={"/hand2.webp"}
              width={300}
              height={500}
              layout="responsive"
              alt="card"
            />
          </div>
        </center>

        <div className="max-w-md mx-auto text-center mb-20">
          <h2 className="font-bold text-2xl md:text-4xl text-white text-center mb-8 p-4 md:p-0">
            Ready to experience borderless banking with Bankr?
          </h2>

          <button className=" bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700">
            Get started - it&#39;s free
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManyFeatures;
