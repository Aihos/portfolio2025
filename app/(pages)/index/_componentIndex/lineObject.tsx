import { ProjectList } from "@/lib/projectUtils";


export default function LineObject(props : ProjectList){

    return(
          <div className="w-full border-1 p-1 border-white h-15"> <div 
                    className="w-full h-full flex flex-col justify-center items-center border-1 bg-white/0 hover:bg-white transition-all ease-in-out border-white transform-gpu group origin-center"
                > <p className="text-center w-full font-semibold text-white group-hover:text-black/90">{props.nom}</p></div>
                </div> 
    )
}