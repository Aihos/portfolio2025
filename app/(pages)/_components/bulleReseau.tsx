import Image from "next/image";
import Link from "next/link";


export default function BulleReseau({icon, url, position} : {icon: string, url : string, position: string}){

    return(
        <Link href={url} className={`z-5 bg-red-500 border-1 group-hover:scale-125 ` + position }>
            <Image width={12} height={12} src={icon} alt="" />
        </Link>
    )
}