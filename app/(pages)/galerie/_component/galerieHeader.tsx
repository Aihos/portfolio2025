import Button from "../../_components/Button";
import Header from "../../_components/header";
import ArrowStylisee from "../../_components/svg/ArrowStylisee";
import Bluestarsvg from "../../_components/svg/bluestar";


export default function GalerieHeader(){

    return(
         <div className="relative bg-[url(/img/fondCarreau.png)] bg-repeat bg-contain min-h-[70vh] w-full flex flex-col justify-center items-center">
            <Header />
                    <h1 className="w-full text-center font-beckam text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none uppercase">GALERIE</h1>

                     {/*  <div className="absolute px-4 md:px-[68px] bottom-8 w-full flex flex-row justify-between items-start">
                                    <p  className="text-primary">
                                        Développeur web indépendant <br />
                                        Bienvenue dans mon univers bleuté
                                    </p>
                                    <div  className="flex flex-row max-sm:justify-end gap-0 md:gap-1">
                                        <p className="text-primary font-semibold w-1/2 md:w-full">Scroll pour descendre </p>  
                                        <ArrowStylisee />
                                    </div>
                                </div>  */}
                </div>
    )
}   