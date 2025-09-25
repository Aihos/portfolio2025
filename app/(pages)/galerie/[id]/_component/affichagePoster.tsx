import Image from "next/image";


export default function AffichagePoster({imgLeft, imgRight, imgUp} : {imgLeft : string, imgRight : string, imgUp: string}){

    return(
        <div className="w-full flex justify-center items-center">
             <div className="relative border-1 min-h-[40vh] w-52 mt-12 group">
{/* faudrait au survol de la div que cela hover effect les enfaqnts */}
            <Image className="absolute left-0 bottom-0  group-hover:rotate-[-12DEG] group-hover:-translate-x-1/3 transition-all ease-in-out z-1" alt="" width={200} height={300} src={imgLeft}/>
            <Image  className="absolute right-0 bottom-0 z-0 group-hover:rotate-[12DEG] group-hover:translate-x-1/3 transition-all ease-in-out group-hover:z-2" alt="" width={200} height={300} src={imgRight}/>
            <Image  className="absolute bottom-0 z-0 group-hover:-translate-y-1/4 transition-all ease-in-out group-hover:z-2" alt="" width={200} height={300} src={imgUp}/>

        </div>
        </div>
       

    )
}