type CardProps = {
    title: string;
    value: string;
    width?: string;
}

export default function DataCard({title, value, width}:CardProps){
    return(
        <div className={`w-1/4 h-full bg-gray-50 rounded-3xl shadow-lg border-2 ${width}`}>
            <div className="w-full h-full flex justify-center items-center">
            <h2 className="text-xl font-semibold">{title}</h2>
            </div>
        </div>
    )
}