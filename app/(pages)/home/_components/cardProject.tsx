import StarSvg from "../../_components/svg/star";


export default function CardProject({titre, desc, img, isOpen} : {titre: string, desc : string, img ?: string, isOpen ?: boolean}){

    return(
        <div className={`border-1 bg-gray-500 p-2 min-w-3xs flex flex-col justify-end items-start`}>
            <h4 className="text-white text-left w-full uppercase">{titre}</h4>             
            <p className="text-white">{desc}</p>
            <StarSvg />
            <button>Voir plus</button>
        </div>
    )
}