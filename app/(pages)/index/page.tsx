
import BandeauTourne from "./_componentIndex/BandeauTourne";
import BlocContact from "./_componentIndex/blocContact";
import HeaderHome from "./_componentIndex/headerHome";
import ProjectHome from "./_componentIndex/projectHome";
import TexteDecouverte from "./_componentIndex/textDecouverte";



export default function DeuxHomePage(){

    return(
        <div className=" ">
            <HeaderHome />
            <BandeauTourne />
            <TexteDecouverte />
            <ProjectHome />
            <BlocContact />
        </div>
    )
}