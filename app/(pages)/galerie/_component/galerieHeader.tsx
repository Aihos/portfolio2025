import Button from "../../_components/Button";
import Header from "../../_components/header";
import Bluestarsvg from "../../_components/svg/bluestar";


export default function GalerieHeader(){

    return(
         <div className="min-h-[100vh] w-full flex flex-col justify-center items-center">
            <Header />
                    <h1 className="relative text-primary">GALERIE</h1>
                    <Bluestarsvg />
                    <p className="max-w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tenetur explicabo quidem delectus placeat beatae modi accusamus nostrum vel neque.</p>
                </div>
    )
}