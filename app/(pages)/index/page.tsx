
import BlocContact from "./_componentIndex/blocContact";
import HeaderHome from "./_componentIndex/headerHome";
import ProjectHome from "./_componentIndex/projectHome";
import TexteDecouverte from "./_componentIndex/textDecouverte";



export default function HomePage(){

    return(
        <div className=" ">
            <HeaderHome />
            <TexteDecouverte />
            <ProjectHome />
            <BlocContact />
        </div>
    )
}