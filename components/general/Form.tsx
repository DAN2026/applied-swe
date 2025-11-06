"use client"

import { Button } from "../ui/button";
import { Input } from "../ui/input";

type FormProps = {
    fields: Field[]
}

type Field = {
    name: string
    placeholder: string
    type: string
    className?: string
    icon?: React.ReactNode
    max?: number
    min?: number
}

export default function Form({fields}: FormProps) {

    return (
      <form
        className="flex flex-row flex-wrap bg-gray-10 p-4 rounded-lg bg-gray-100"
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
          </div>
        ))}
        <div className="flex justify-center mt-4 w-full">
        <Button
          type="submit"
          className="w-3/4 active:bg-emerald-600 active:text-lg  bg-emerald-800 rounded-lg shadow-xl text-md hover:bg-emerald-700 hover:text-lg transition-all ease-in-out duration-300"
        >
          Submit
        </Button>
        </div>
      </form>

    )
}