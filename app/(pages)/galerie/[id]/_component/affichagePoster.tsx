import Image from "next/image";


export default function AffichagePoster({imgLeft, imgRight, imgUp} : {imgLeft : string, imgRight : string, imgUp: string}){

    return(
        <div className="w-full flex justify-center items-center md:mb-8">
             <div className="relative  min-h-[40vh] w-56 md:w-64 lg:w-72 group">
{/* faudrait au survol de la div que cela hover effect les enfaqnts */}
            <Image className="absolute left-0 bottom-0 border-1 border-primary  group-hover:rotate-[-12DEG] group-hover:-translate-x-1/3 transition-all duration-500 ease-in-out z-1 group-hover:z-2" alt="" width={350} height={500} src={imgLeft}/>
            <Image  className="absolute right-0 bottom-0 border-1 border-primary z-0 group-hover:rotate-[12DEG] group-hover:translate-x-1/3 transition-all duration-500 ease-in-out group-hover:z-2" alt="" width={350} height={500} src={imgRight}/>
            <Image  className="absolute bottom-0 border-1 border-primary group-hover:-translate-y-1/4 transition-all duration-500 ease-in-out z-2 " alt="" width={350} height={500} src={imgUp}/>

        </div>
        </div>
       

    )
}