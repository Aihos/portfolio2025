import Bluestarsvg from "../_components/svg/bluestar";
import Logosvg from "../_components/svg/logo";
import HeaderHome from "./_components/headerHome";
import ProfilHome from "./_components/profilHome";
import ProjectHome from "./_components/projectHome";


export default function HomePage(){

    return(
        <div className="relative mx-[68px]">
            <Logosvg />
            <HeaderHome />
            <ProfilHome />
            <ProjectHome />
        </div>
    )
}