import StarSvg from "../../_components/svg/star";

interface CardProjectProps {
    titre: string;
    desc: string;
    img?: string;
    isOpen?: boolean;
    onClick?: () => void;
}

export default function CardProject({titre, desc, img, isOpen = false, onClick} : CardProjectProps){

    return(
        <div 
            className={`relative border-2 border-primary bg-gradient-to-t from-black/90 via-primary/40 to-primary/10 p-4 cursor-pointer transition-all duration-300 overflow-hidden group
                ${isOpen 
                    ? 'min-w-[400px] max-w-[500px] h-[500px] z-10 shadow-2xl' 
                    : 'min-w-[270px] max-w-[320px] h-[420px] hover:scale-105'
                } flex flex-col justify-end items-start`}
            onClick={onClick}
        >
            {/* Image de fond */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src={img || "/globe.svg"}
                    alt="project visual"
                    className="object-cover w-full h-full opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-primary/40 to-transparent" />
            </div>

            {/* Contenu */}
            <div className="relative z-10 flex flex-col justify-end h-full w-full">
                <h3 className="beckam-font text-white text-3xl mb-2 leading-none uppercase">{titre}</h3>             
                <p className={`text-white mb-4 transition-all duration-300 ${isOpen ? 'text-sm max-h-32 overflow-y-auto' : 'text-xs max-h-16 overflow-hidden'}`}>
                    {desc}
                </p>
                
                {/* Étoile et bouton */}
                <div className="flex justify-between items-end w-full">
                    <div className="flex-1">
                        {isOpen && (
                            <button 
                                className="bg-primary text-white font-bold py-2 px-6 uppercase tracking-wider transition hover:bg-primary/80 animate-fadeIn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    // Ajouter ici la logique pour voir plus
                                }}
                            >
                                Voir Plus
                            </button>
                        )}
                    </div>
                    <StarSvg />
                </div>
            </div>
        </div>
    )
}