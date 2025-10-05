import { ProjectList } from "@/lib/projectUtils";


export default function LineObject(props : ProjectList){

    return(
        <div className="w-full border-1 p-1 border-white h-15"> 
            <div className="w-full h-full flex flex-col justify-center items-center border-1 bg-white/0 hover:bg-white transition-all ease-in-out border-white transform-gpu group origin-center">
                <div className="flex items-center justify-center w-full">
                    <span className="text-white group-hover:text-[#2A2EC5] opacity-0 group-hover:opacity-100 transition-opacity">★</span>
                    <p className="text-center font-semibold text-white group-hover:text-[#2A2EC5] mx-2">{props.nom}</p>
                    <span className="text-white group-hover:text-[#2A2EC5] opacity-0 group-hover:opacity-100 transition-opacity">★</span>
                </div>
            </div>
        </div>
    )
}