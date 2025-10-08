import { ProjectList } from "@/lib/projectUtils";
import Link from "next/link";

export default function LineObject(props : ProjectList){

    return(
        <Link href={`/galerie/${props.id}`} className="w-full block">
            <div className="w-full border-1 p-1 border-white h-16 sm:h-20"> 
                <div className="w-full h-full flex flex-row justify-between items-center px-4 sm:px-6 border-1 bg-white/0 hover:bg-white transition-all ease-in-out border-white transform-gpu group origin-center cursor-pointer">
                    <div className="flex items-center gap-4">
                        <span className="text-white group-hover:text-[#2A2EC5] opacity-60 group-hover:opacity-100 transition-all font-beckam text-lg sm:text-xl">
                            {props.numero}
                        </span>
                        <div className="flex flex-col">
                            <p className="text-left font-semibold text-white group-hover:text-[#2A2EC5] text-sm sm:text-base">
                                {props.nom}
                            </p>
                            <p className="text-left text-xs text-white/60 group-hover:text-[#2A2EC5]/60 hidden sm:block">
                                {props.description}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-white/60 group-hover:text-[#2A2EC5]/60 text-xs sm:text-sm">
                            {props.annee}
                        </span>
                        <span className="text-white group-hover:text-[#2A2EC5] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1">
                            →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}