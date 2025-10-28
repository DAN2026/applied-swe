import Form from "@/components/general/Form";
import { LucideKey, LucideMail, LucidePersonStanding, LucidePin } from "lucide-react";



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
            className: "w-1/2",
            icon: <LucidePin/>,
        },{
            name: "Address",
            placeholder: "Address",
            type: "text",
            className: "w-1/2",
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


    return (
        <div className="h-screen">
            <div className="h-full w-1/2 mx-auto flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center my-8">Register</h1>
                <div>
            <Form fields={fields}/>
            </div>
            </div>
        </div>
    )
}