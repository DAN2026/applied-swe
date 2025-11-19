"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
import { useRouter } from "next/navigation";
import { signIn, SignInResponse, useSession } from "next-auth/react";

type FormProps = {
  fields: Field[];
  action: (
    formData: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, { errors: string[] }>;
  }>;
  successMsg: string
  successFunc?: (email?:string, password?:string) => void;
  redirect?: string
};



type Field = {
    name: string
    placeholder: string
    type: string
    className?: string
    icon?: React.ReactNode
    max?: number
    min?: number
}

export default function Form({fields,action,successMsg,redirect, successFunc}: FormProps) {

  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, { errors: string[]}> | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const result = await action(formData);
    if (!result.success){
        setErrors(result.errors || null);
        setPending(false);
    }
    else {
      setErrors(null);
      setSuccess(true);
      setPending(false);
      if (successFunc)
      {
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();

        if (email && password)
        {
          successFunc(email, password);
        }
      }

      if (redirect){
      router.push(`/${redirect}`)
      }
    }
  }


    return (
      <form
        className="flex flex-row flex-wrap bg-gray-10 p-4 rounded-lg bg-gray-100"
        onSubmit={handleSubmit}
      >

        {fields.map((field, index) => (
          <div key={index} className={field.className && field.className}>
            <div className={" group flex shadow-lg items-center border-2 rounded-md px-2 my-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-blue-300 transition-all ease-out duration-300"}>
              <span className="text-gray-600 items-center mr-2 group-focus-within:text-emerald-700 transition-all ease-in-out">{field.icon}</span>
              <Input
                className="border-none focus:outline-none focus-visible:ring-0"
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                max={field.max}
                min={field.min}
              />
            </div>
            {errors?.[field.name]?.errors.map((errorMessage, errorIndex) => (
              <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
            ))}
          </div>
        ))}
        {errors?.["general"]?.errors.map((errorMessage, errorIndex) => (
          <p className="text-red-600 tracking-tighter text-sm w-full" key={errorIndex}>{errorMessage}</p>
        ))}
        {success && <p className="text-sm text-green-500 font-semibold">{successMsg}</p>}
        <div className="flex justify-center mt-4 w-full">
        <Button
          type="submit"
          className="w-3/4 active:bg-emerald-600 active:text-lg  bg-emerald-800 rounded-lg shadow-xl text-md hover:bg-emerald-700 hover:text-lg transition-all ease-in-out duration-300"
        >
          {pending && <Spinner/>}
          Submit
        </Button>
        </div>
      </form>

    )
}