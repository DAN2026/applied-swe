import { Button } from "../ui/button";

type ButtonGroupProps = {
    value: string;
    onChange: (value: string) => void;
}

export default function ButtonGroup({value, onChange}:ButtonGroupProps){
    const options = ["3 Months","6 Months","1 Year","All Time"]
    return (
        <div className="flex gap-2">
            {options.map((option) => (
                <Button 
                key={option} 
                onClick={()=>{onChange(option)}} 
                variant="outline"
                className={`${value === option ? "bg-gray-600 text-white hover:bg-gray-500 hover:text-white" : "bg-white"} text-base rounded-b-none`}
                >
                    {option}
                </Button>
            ))}
        </div>
    )
}