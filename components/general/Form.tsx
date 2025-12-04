"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Spinner } from "../ui/spinner";
import { useRouter } from "next/navigation";
import { signIn, SignInResponse, useSession } from "next-auth/react";
import { Select, SelectItem, SelectTrigger } from "../ui/select";
import { SelectContent, SelectValue } from "@radix-ui/react-select";
import DatePicker from "./DatePicker";

type FormProps = {
  fields: Field[];
  action: (
    formData: FormData
  ) => Promise<{
    success: boolean;
    errors?: Record<string, { errors: string[] }>;
  }>;
  successMsg: string
  successFunc?: () => void;
  redirect?: string
};

type Field = {
    name: string
    placeholder: string
    type: string
    fieldType: string;
    options?: string[];
    className?: string
    icon?: React.ReactNode
    max?: number|string
    min?: number|string
}

export default function Form({fields,action,successMsg,redirect, successFunc}: FormProps) {

  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, { errors: string[]}> | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const createField = (field:Field) => {
    if (field.fieldType === "input"){
      return (
        <div className={" group flex shadow-lg items-center border-2 rounded-md px-2 my-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-blue-300 transition-all ease-out duration-300"}>
          <span className="text-gray-600 items-center mr-2 group-focus-within:text-emerald-700 transition-all ease-in-out">{field.icon}</span>
          <Input
            className="border-none shadow-none focus:outline-none focus-visible:ring-0"
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            max={field.max}
            min={field.min}
          />
        </div>
      )
    }
    if (field.fieldType === "select"){
      return (
        <div className={"group py-2 flex shadow-lg items-center border-2 rounded-md px-2 my-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-blue-300 transition-all ease-out duration-300"}>
          <span className="text-gray-600 items-center mr-2 group-focus-within:text-emerald-700 transition-all ease-in-out">{field.icon}</span>
          <select name={field.name} className="border-none shadow-none focus:outline-none focus-visible:ring-0 w-full">
            <option value="" disabled>{field.placeholder}</option>
              {field.options?.map((option)=>(
                <option key={option} value={option} className="bg-gray-100 py-2 rounded-xl ">{option}</option>
              ))}
          </select>
        </div>
      )
    }
    if (field.fieldType == "date"){
      return(<div className="group flex shadow-lg items-center border-2 rounded-md px-2 my-2 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-blue-300 transition-all ease-out duration-300">
      <Input type="date" placeholder={field.placeholder} name={field.name} className="border-none shadow-none focus:outline-none focus-visible:ring-0" min={field.min} max={field.max}/>
      </div>)
    }
    else{
      return(null)
    }
  }
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const result = await action(formData);
    if (!result?.success){
        setErrors(result?.errors || null);
        setPending(false);
    }
    else {
      setErrors(null);
      setSuccess(true);
      setPending(false);
      if(successFunc){
        successFunc()
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
          <div key={index} className={field.className}>
            {createField(field)}
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