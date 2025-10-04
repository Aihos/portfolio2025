import ProjectHome from "../home/_components/projectHome";
import HeaderHome from "./_componentIndex/headerHome";
import TexteDecouverte from "./_componentIndex/textDecouverte";



export default function HomePage(){

    return(
        <div className="mx-[68px] bg-[url(/img/fondCarreau.png)] bg-repeat bg-contain">
            <HeaderHome />
            <TexteDecouverte />
            <ProjectHome />
        </div>
    )
}