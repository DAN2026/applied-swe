import Form from "@/components/general/Form";
import { LucideKey, LucideMail, LucidePersonStanding, LucidePin } from "lucide-react";
import Image from "next/image";
import { handleLogin } from "./actions";



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
  <div className="md:hidden h-screen w-full bg-linear-to-b from-green-700 to-emerald-600 flex flex-col">
    
    <div className="relative flex-1 w-full">
      <Image
        src="/images/nature.jpg"
        fill
        alt="Image of donated clothes"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
        <Image
          src="/images/sustainwear-transparent-white.png"
          alt="SustainWear Logo"
          width={120}
          height={120}
          className="w-auto h-24 mb-3"
        />
        <h1 className="text-4xl font-extrabold tracking-wide text-white uppercase drop-shadow-md">
          Login
        </h1>
        <p className="mt-2 text-white/90 text-base font-medium text-center px-4">
          Welcome back  — continue donating today.
        </p>
      </div>
    </div>

    <div className="flex flex-col flex-1 justify-center rounded-t-3xl px-6 py-8 shadow-lg">
      <Form fields={fields} action={handleLogin} />
    </div>
  </div>
);


    const desktopDisplay = (
      <div className="hidden md:flex h-screen w-full">
        <div className="relative w-1/2 h-screen">
          <Image
            src="/images/clothes.jpg"
            fill
            alt="image of donated clothes"
            className="object-cover"
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
            <Form fields={fields} action={handleLogin} />
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