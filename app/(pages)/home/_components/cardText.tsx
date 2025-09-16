import StarSvg from "../../_components/svg/star";


export default function CardText(){

    return(
        <div className="flex flex-col justify-between items-center h-full w-full border-1 border-[#2A2EC5] px-8 py-4 gap-2 ">
<StarSvg />
<p className="text-justify">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit atque assumenda deserunt optio dolor quas iusto, maxime tenetur, corporis sed vitae doloribus laudantium consequuntur animi voluptas esse ipsum quibusdam culpa.
</p>
<h3 className="text-primary text-center">Compétence</h3>
</div>
    )
}