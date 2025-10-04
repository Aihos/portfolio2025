import Header from "../../_components/header";
import ArrowStylisee from "../../_components/svg/ArrowStylisee";
import AffichagePoster from "../../galerie/[id]/_component/affichagePoster";



export default function HeaderHome(){

    return(
        <div className="min-h-[100vh] w-full flex flex-col justify-start items-center pt-20 relative">
            <Header />
            <h1 className="relative w-full text-[270px] text-center tracking-widest text-primary">HUGO LERAY</h1>
           <AffichagePoster imgLeft="/img/Artémis.png" imgRight="/img/blue.jpg" imgUp="/img/Hermès.png" />
        <div className="absolute bottom-8 w-full flex flex-row justify-between items-center">  <p className="text-primary">Développeur web indépendant <br />
Bienvenue dans mon univers bleuté</p>
<div className="flex flex-row gap-1">
    <p className="text-primary font-semibold">Scroll pour descendre </p>  <ArrowStylisee />
</div>
            </div> 

        </div>
    )
}