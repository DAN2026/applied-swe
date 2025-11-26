type CardProps = {
    title: string;
    value: string;
    width?: string;
}

export default function DataCard({title, value, width}:CardProps){
    return(
        <div className={`w-1/4 h-full bg-linear-90 from-emerald-800 to-emerald-600 text-white rounded-3xl shadow-lg ${width}`}>
            <div className="w-full h-full flex justify-center flex-col items-center">
            <h2 className="text-xl font-semibold tracking-wider">{title}</h2>
            <h3 className="text-2xl font-bold">{value}</h3>
            </div>
        </div>
    )
}