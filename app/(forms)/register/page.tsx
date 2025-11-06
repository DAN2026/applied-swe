import Form from "@/components/general/Form";
import { LucideHouse, LucideKey, LucideMail, LucidePersonStanding, LucidePin } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "Register | SustainWear",

}

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
            name: "email",
            placeholder: "Email",
            type: "text",
            className: "w-full",
            icon: <LucideMail/>,
            max: 50
        },
        {
            name: "postcode",
            placeholder: "Postcode",
            type: "text",
            className: "lg:w-1/2 md:w-full w-full",
            icon: <LucidePin/>,
        },{
            name: "Address",
            placeholder: "Address",
            type: "text",
            className: "lg:w-1/2 md:w-full w-full",
            icon: <LucideHouse/>
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
      <div className="grid grid-rows-[30%_70%] md:hidden h-screen w-full bg-gray-100 ">
        <div className="relative h-full w-full">
          <Image
            src="/images/nature.jpg"
            fill
            alt="image of donated clothes"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center text-center items-center ">
            <div className="w-fit h-[80%]">
              <Image
                src="/images/sustainwear-transparent-white.png"
                alt="SustainWear Logo"
                width={100}
                height={100}
                className="h-full w-auto"
              />
            </div>
            
          </div>
        </div>

        <div className="flex flex-col w-full text-center justfify-center py-[10%] mx-auto bg-emerald-600 bg-linear-to-t from-emerald-600 to-green-700">
            <div>
              <h1 className="text-5xl tracking-wider uppercase mb-3 text-white font-bold">
                Register
              </h1>
              <p className="text-2xl tracking-tight text-white font-semibold">
                Welcome to SustainWear!
                <br />
                Register to begin donating.
              </p>
            </div>
            <div className="p-6 py-10">
            <Form fields={fields} />
          </div>
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
            Register
          </h2>
          <div className="p-6">
            <Form fields={fields} />
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