import Button from "../../_components/Button";
import Header from "../../_components/header";
import Bluestarsvg from "../../_components/svg/bluestar";


export default function GalerieHeader(){

    return(
         <div className="bg-[url(/img/fondCarreau.png)] bg-repeat bg-contain min-h-[70vh] w-full flex flex-col justify-center items-center">
            <Header />
                    <h1 className="w-full text-center font-beckam text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none uppercase">GALERIE</h1>
                    
                </div>
    )
}