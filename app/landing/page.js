"use client";

import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full">


      <div className="w-full flex flex-col items-center bg-linear-to-b from-emerald-700 to-green-600 text-white px-6 md:px-16 py-16">
        <Image
          src="/images/sustainwear-transparent-white.png"
          alt="SustainWear Logo"
          width={200}
          height={200}
          className="mb-6"
        />
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          SustainWear
        </h2>
        <p className="text-base md:text-lg text-center mb-10 max-w-lg">
          SustainWear makes it easy to donate your unwanted clothes.  
          Together, we can make donation more popular - with one piece of clothing at a time.
        </p>
        <Link
          href="/register"
          className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition"
        >
          Start Donating
        </Link>
      </div>



      <div className="relative w-full py-28 md:py-36 px-6 md:px-16 text-center overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/donations-box.png"
            alt="Donations Box Background"
            fill
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/40" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          About SustainWear
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
          SustainWear is on a mission to give clothes a second life.  
          By donating your gently used clothing, you help reduce textile waste,  
          support communities in need, and promote a more sustainable fashion cycle.
        </p>
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Every piece of clothing counts. We make donating easy and responsible —  
          simply bring your clothes to a donation center or schedule a pickup.  
          Together, we can make fashion circular.
        </p>
      </div>







      <div className="w-full py-20 px-6 md:px-16 text-center bg-linear-to-b from-emerald-700 to-green-600">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
          Our Charity Partners
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12">
          Every donation supports trusted organisations making a real difference.  
          Your clothes help fund research, reduce waste, and provide essential aid  
          to communities in need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">

          <a
            href="https://www.mind.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="relative rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform  overflow-hidden bg-white h-64 flex flex-col justify-end">
              <Image
                src="/images/Mind-logo-blue-on-white-higher-res-jpeg.jpg"
                alt="Mind Logo"
                fill
                className="object-contain object-center"
              />
              <div className="relative z-10 bg-black/50 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">Mind</h3>
                <p className="text-white/90 text-sm">
                  Supporting mental health services across the UK.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.bhf.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="relative rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform overflow-hidden bg-white h-64 flex flex-col justify-end">
              <Image
                src="/images/BHF-logo.webp"
                alt="British Heart Foundation Logo"
                fill
                className="object-contain object-center"
              />
              <div className="relative z-10 bg-black/50 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">British Heart Foundation</h3>
                <p className="text-white/90 text-sm">
                  Funding life-saving research into heart and circulatory diseases.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.salvationarmy.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="relative rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform overflow-hidden bg-white h-64 flex flex-col justify-end">
              <Image
                src="/images/salvationarmy.jpg"
                alt="Salvation Army Logo"
                fill
                className="object-contain object-center"
              />
              <div className="relative z-10 bg-black/50 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">Salvation Army</h3>
                <p className="text-white/90 text-sm">
                  Providing support to vulnerable individuals and families.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.cancerresearchuk.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="relative rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform overflow-hidden bg-white h-64 flex flex-col justify-end">
              <Image
                src="/images/cancer-research.png"
                alt="Cancer Research UK Logo"
                fill
                className="object-contain object-center"
              />
              <div className="relative z-10 bg-black/50 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">Cancer Research UK</h3>
                <p className="text-white/90 text-sm">
                  Driving world-leading cancer research and treatments.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.oxfam.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="relative rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform overflow-hidden bg-white h-64 flex flex-col justify-end">
              <Image
                src="/images/oxfam-logo.b6703c01cc7f.png"
                alt="Oxfam Logo"
                fill
                className="object-contain object-center"
              />
              <div className="relative z-10 bg-black/50 p-4">
                <h3 className="text-2xl font-bold text-white mb-1">Oxfam</h3>
                <p className="text-white/90 text-sm">
                  Fighting global poverty and promoting sustainable development.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
