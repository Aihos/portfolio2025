import Bluestarsvg from "../../_components/svg/bluestar";
import CoteBar from "../../_components/svg/coteBar";
import CardText from "./cardText";


export default function ProfilHome() {

    return (
        <div className="relative min-h-[100vh] h-full">
            <h2 className="text-primary uppercase ">Profil</h2>
            <CoteBar />
            <Bluestarsvg />
            <p className="max-w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero possimus nesciunt tempora fuga eius nam officiis, unde accusamus repellat!</p>
            <div className="grid grid-cols-5 gap-4 mt-4 w-full min-h-[83vh] h-full">
                <CardText titre={"Compétences"} />
                <CardText titre={"Profil"} />
                <CardText titre={"Avenir"} />
            </div>
        </div>
    )
}