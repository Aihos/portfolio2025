import Button from "../../_components/Button";
import Bluestarsvg from "../../_components/svg/bluestar";


export default function ProjectHome(){

    return(
          <div className="relative min-h-[100vh] h-full">
            <div className="flex flex-row w-full justify-between ">
                <div >
                    <h2 className="text-primary uppercase ">Projets</h2>
                    <Bluestarsvg />
                    <p className="max-w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero possimus nesciunt tempora fuga eius nam officiis, unde accusamus repellat!</p>
                     </div>
                <Button texte="Voir plus" />
            </div>
        </div>
    )
}