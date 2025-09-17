import GalerieEnsemble from "./_component/galerieEnsemble";
import GalerieHeader from "./_component/galerieHeader";


export default function PageGalerie(){

    return(
        <div className="min-h-screen">
            <GalerieHeader />
            <GalerieEnsemble />
        </div>
    )
}