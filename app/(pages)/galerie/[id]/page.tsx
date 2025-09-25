import AffichagePoster from "./_component/affichagePoster"


export default function PageId(){

    return(
        <div className="min-h-screen w-full bg-white relative overflow-hidden">
            {/* SVG étoile en fond */}
            <AffichagePoster img1="" img2="" img3="" />
            <div className="absolute right-[-10vw] top-[-5vw] w-[50vw] h-[50vw] opacity-10 -z-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
                    <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" />
                </svg>
            </div>

            <div className="flex flex-row h-screen items-center px-8">
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
                    <div className="relative w-full max-w-2xl h-[70vh] bg-gradient-to-br from-blue-300 to-blue-600 overflow-hidden">
                        {/* Titre Blue Flower en overlay */}
                        <div className="absolute top-8 left-8 z-10">
                            <h3 className="beckam-font text-white text-[3rem] leading-none">
                                Blue<br/>Flower
                            </h3>
                        </div>

                        {/* Texte descriptif en overlay */}
                        <div className="absolute bottom-8 left-8 z-10 max-w-xs">
                            <p className="text-white text-xs leading-relaxed opacity-90">
                                Lorem ipsum dolor sit amet consectetur. At massa pellentesque 
                                consectetur suspendisse natoque. Adipiscing imperdiet gravida lorem 
                                tellus. In mattis aliquam pellentesque.
                            </p>
                        </div>

                        {/* Image de fleur stylisée */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 opacity-80">
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    {/* Tige */}
                                    <line x1="100" y1="200" x2="100" y2="80" stroke="#1a1a2e" strokeWidth="3"/>
                                    {/* Feuilles */}
                                    <ellipse cx="85" cy="120" rx="15" ry="25" fill="#1a1a2e" transform="rotate(-30 85 120)"/>
                                    <ellipse cx="115" cy="140" rx="12" ry="20" fill="#1a1a2e" transform="rotate(45 115 140)"/>
                                    {/* Fleur */}
                                    <circle cx="100" cy="80" r="30" fill="#1a1a2e" opacity="0.8"/>
                                    <ellipse cx="100" cy="60" rx="20" ry="30" fill="#1a1a2e" opacity="0.9"/>
                                    <ellipse cx="120" cy="80" rx="15" ry="25" fill="#1a1a2e" opacity="0.7" transform="rotate(60 120 80)"/>
                                    <ellipse cx="80" cy="80" rx="15" ry="25" fill="#1a1a2e" opacity="0.7" transform="rotate(-60 80 80)"/>
                                </svg>
                            </div>
                        </div>

                        {/* Étoile en bas à droite */}
                        <div className="absolute bottom-8 right-8">
                            <svg width="32" height="32" viewBox="0 0 100 100" className="text-white fill-current">
                                <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}