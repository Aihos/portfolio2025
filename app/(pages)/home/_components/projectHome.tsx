import Link from "next/link";
import Button from "../../_components/Button";
import Bluestarsvg from "../../_components/svg/bluestar";
import CarrouselProject from "./carrouselProject";


export default function ProjectHome(){

    return(
          <div className="relative min-h-[100vh] mt-20 h-full w-full">
            <div className="flex flex-row w-full justify-between ">
                <div >
                    <h2 className="text-primary uppercase ">Projets</h2>
                    <Bluestarsvg />
                    <p className="max-w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero possimus nesciunt tempora fuga eius nam officiis, unde accusamus repellat!</p>
                 </div>
               <Button url="/galerie" texte="Voir plus" />
            </div>
            <div>
                <CarrouselProject />
            </div>
        </div>
    )
}