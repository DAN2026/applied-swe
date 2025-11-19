"use client"

import Form from "@/components/general/Form";
import { LucideKey, LucideMail, LucidePersonStanding, LucidePin } from "lucide-react";
import Image from "next/image";
import { handleLogin } from "./actions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";



export default function Register(){

  
    const fields = [
        {
            name: "username",
            placeholder: "Username",
            type: "text",
            className: "w-full",
            icon: <LucidePersonStanding/>,
            max: 20
        },
        {
            name: "password",
            placeholder: "Password",
            type: "password",
            className: "w-full",
            icon: <LucideKey/>,
            min: 10
        },
    ]
const mobileDisplay = (
   <div className="md:hidden min-h-screen w-full relative flex flex-col">
  <div className="absolute inset-0 -z-10 h-full w-full">
    <Image
      src="/images/nature.jpg"  
      fill
      alt="Image of donated clothes"
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

  <div className="flex flex-col items-center pt-10 px-4">
    <Image
      src="/images/sustainwear-transparent-white.png"
      alt="SustainWear Logo"
      width={120}
      height={120}
      className="w-auto"
    />
    <h1 className="text-4xl font-extrabold tracking-wide text-white uppercase drop-shadow-md mt-4">
      Login
    </h1>
    <p className="mt-2 text-white/90 text-base font-medium text-center">
      Welcome back — login to continue donating.
    </p>
  </div>

  <div className="flex flex-col flex-1 justify-center px-6 pt-6 pb-10">
    <Form fields={fields} action={handleLogin} successMsg="Successfully logged in" redirect="dashboard" />
    <div className="w-full flex justify-between text-center mt-2">
      <Link
        href="#"
        className="text-base underline text-white active:text-lime-200 transition-all duration-200 ease-in-out"
      >
        Don't have an account?
      </Link>
      <Link
        href="#"
        className="text-base underline text-white active:text-lime-200 transition-all duration-200 ease-in-out"
      >
        Forgot password?
      </Link>
    </div>
  </div>
</div>
);


    const desktopDisplay = (
      <div className="hidden md:flex min-h-screen w-full">
        <div className="relative w-1/2">
          <Image
            src="/images/clothes.jpg"
            fill
            alt="image of donated clothes"
            className="object-cover min-h-screen"
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="flex flex-col h-full justify-center items-center">
              <h1 className="text-6xl text-green-600/80 font-extrabold tracking-tight text-outline uppercase">
                Donate
              </h1>
              <h1 className="text-6xl text-white/80 font-extrabold tracking-wide uppercase">
                Today
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2 bg-emerald-600 bg-linear-to-t from-emerald-600 to-green-700">
          <Image
            src="/images/sustainwear-transparent-white.png"
            alt="SustainWear Logo"
            width={200}
            height={200}
            className="w-[20%] mx-auto"
          />
          <h2 className="text-5xl text-center text-white font-bold mb-5">
            Login
          </h2>
          <div className="p-6">
            <Form fields={fields} action={(handleLogin)} successMsg="Successfully logged in" redirect="dashboard"/>
            <Button onClick={() => signIn("google",{callbackUrl:"/dashboard"})}>Google Login</Button>
            <div className="w-full flex justify-between text-center mt-2">
            <Link href="/register" className="text-base underline text-white hover:text-lime-200 transition-all duration-200 ease-in-out">Don't have an account?</Link>
            <Link href="#" className="text-base underline text-white hover:text-lime-200 transition-all duration-200 ease-in-out">Forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    );

    return (
        <div>
            {mobileDisplay}
            {desktopDisplay}
        </div>
    )
}