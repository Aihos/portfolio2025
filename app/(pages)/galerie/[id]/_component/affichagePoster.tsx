import Image from "next/image";


export default function AffichagePoster({img1, img2, img3} : {img1 : string, img2 : string, img3: string}){

    return(
        <div>

            <Image alt="" width={200} height={300} src={img1}/>
            <Image alt="" width={200} height={300} src={img2}/>
            <Image alt="" width={200} height={300} src={img3}/>

        </div>

    )
}