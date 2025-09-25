import Image from "next/image"
import AffichagePoster from "./_component/affichagePoster"
import GaleriePrint from "./_component/galeriePrint"


export default function PageId(){

    return(
        <div className="min-h-screen w-full bg-white relative overflow-hidden">
             <div className="flex flex-col justify-center items-center gap-2">
                  <h1 className="w-full text-center beckam-font text-primary text-[6rem] sm:text-[8rem] leading-none uppercase mb-6">
                        PORTFOLIO
                    </h1>
                     <p className=" max-w-1/2 text-primary text-xs sm:text-sm mb-8 leading-relaxed">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA AT MASSA VITAE ODIO 
                        EU SCELERISQUE TURPIS. AT MATTIS EUISMOD ERAT PORTA EGET ELEIFEND VITAE 
                        NISI TELLUS. MASSA PELLENTESQUE CONSECTETUR SUSPENDISSE NATOQUE. 
                        ADIPISCING IMPERDIET GRAVIDA LOREM IN NON ALIQUAM SUSCIPIT.
                    </p>

            <AffichagePoster imgLeft="/img/Artémis.png" imgRight="/img/blue.jpg" imgUp="/img/Hermès.png" />

              <p className=" max-w-2/3 text-primary text-xs sm:text-sm mb-8 leading-relaxed">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA AT MASSA VITAE ODIO 
                        EU SCELERISQUE TURPIS. AT MATTIS EUISMOD ERAT PORTA EGET ELEIFEND VITAE 
                        NISI TELLUS. MASSA PELLENTESQUE CONSECTETUR SUSPENDISSE NATOQUE. 
                        ADIPISCING IMPERDIET GRAVIDA LOREM IN NON ALIQUAM SUSCIPIT.
                    </p>
                <GaleriePrint listeImg={["/img/Artémis.png","/img/blue.jpg", "/img/Hermès.png"]} />
             </div>
           

            <div className="flex flex-row max-h-[50vh] h-screen items-center px-8">
                {/* Section gauche - Titre et description */}
                <div className="flex-1 flex flex-col justify-center pr-12">
                    <h1 className="beckam-font text-primary text-[6rem] sm:text-[8rem] leading-none uppercase mb-6">
                        PORTFOLIO
                    </h1>
                    
                    <p className="text-primary text-xs sm:text-sm max-w-lg mb-8 leading-relaxed">
                        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA AT MASSA VITAE ODIO 
                        EU SCELERISQUE TURPIS. AT MATTIS EUISMOD ERAT PORTA EGET ELEIFEND VITAE 
                        NISI TELLUS. MASSA PELLENTESQUE CONSECTETUR SUSPENDISSE NATOQUE. 
                        ADIPISCING IMPERDIET GRAVIDA LOREM IN NON ALIQUAM SUSCIPIT.
                    </p>

                    {/* Gros titre secondaire */}
                    <h2 className="beckam-font text-primary text-[4rem] leading-none uppercase mb-6">
                        101
                    </h2>

                    {/* Bouton */}
                    <button className="border-2 border-primary text-primary font-bold py-3 px-12 max-w-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-all">
                        VOIR LE SITE
                    </button>
                </div>

                {/* Section droite - Image */}
                <div className="flex-1 relative h-full flex items-center justify-end">
                    <Image 
                        src="/img/blue.jpg" 
                        alt="Blue Flower" 
                        fill
                        className="object-contain"
                    />
                   
                </div>
            </div>
        </div>
    )
}