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

      <div className="relative w-full py-20 px-6 md:px-16 text-center overflow-hidden">

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
          By donating your used clothing, you help reduce textile waste,  
          support communities in need, and promote a more sustainable fashion cycle.
        </p>

        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Every piece of clothing counts. We make donating easy and responsible —  
          simply bring your clothes to a donation center or schedule a pickup.  
        </p>
      </div>
    </div>
  );
}
