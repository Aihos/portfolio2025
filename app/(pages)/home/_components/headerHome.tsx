import Link from "next/link"
import BulleReseau from "../../_components/bulleReseau"
import Button from "../../_components/Button"
import Bluestarsvg from "../../_components/svg/bluestar"
import Image from "next/image"


export default function HeaderHome(){

    return(
        <div className="min-h-[100vh] w-full flex flex-col justify-center items-center">
            <h1 className="relative text-primary">PORTFOLIO</h1>
            <Bluestarsvg />
            <p className="max-w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tenetur explicabo quidem delectus placeat beatae modi accusamus nostrum vel neque.</p>
            <div className="group relative">
                  <Button texte="Me découvrir" className=""/>
 <Link href={"a"} className={`z-5 bg-red-500 border-1 group-hover:-translate- absolute left-1/2 top-1/2 ` }>
            <Image width={24} height={24} src="/img/blue.jpg" alt="" />
        </Link>
            </div>
          


           {/*  <BulleReseau icon="/img/blue.jpg" url="a" position="absolute" /> */}
        </div>
    )
}