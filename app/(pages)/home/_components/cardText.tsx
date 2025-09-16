import StarSvg from "../../_components/svg/star";


export default function CardText({titre} : {titre:string}){

    return(
        <div className="flex flex-col justify-between items-center h-full w-full border-1 border-[#2A2EC5] px-8 py-4 gap-2 ">
<StarSvg />
<div className="h-full pt-4">
    <p className="text-justify text-sm">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit atque assumenda deserunt optio dolor quas iusto, maxime tenetur, corporis sed vitae doloribus laudantium consequuntur 
</p>
</div>


<h3 className="text-primary text-center uppercase">{titre}</h3>
</div>
    )
}