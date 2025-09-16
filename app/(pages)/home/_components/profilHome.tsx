import Bluestarsvg from "../../_components/svg/bluestar";
import CoteBar from "../../_components/svg/coteBar";
import CardText from "./cardText";


export default function ProfilHome(){

    return(
        <div className="relative min-h-[80vh]">
<h2 className="text-primary uppercase ">Profil</h2>
<CoteBar />
<Bluestarsvg />
<p className="max-w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero possimus nesciunt tempora fuga eius nam officiis, unde accusamus repellat!</p>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <CardText />
        <CardText />
        <CardText />

      </div>

      
        </div>
    )
}