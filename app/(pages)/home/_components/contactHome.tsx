import Bluestarsvg from "../../_components/svg/bluestar";

export default function ContactHome() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-start px-8 pt-8">
            {/* SVG étoile en fond */}
            <div className="absolute left-[-8vw] top-[-8vw] w-[60vw] h-[60vw] opacity-20 -z-10 pointer-events-none select-none">
                <Bluestarsvg />
            </div>

            {/* Titre et intro */}
            <h1 className="beckam-font text-primary text-[4rem] sm:text-[5rem] leading-none uppercase mb-2">Contact</h1>
            <p className="text-primary text-xs sm:text-sm max-w-2xl mb-6">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA AT MASSA VITAE ODIO EU SCELERISQUE TURPIS. AT MATTIS EUISMOD ERAT PORTA EGET ELEIFEND VITAE NISI TELLUS. MASSA PELLENTESQUE CONSECTETUR SUSPENDISSE NATOQUE. ADIPISCING IMPERDIET GRAVIDA LOREM IN NON ALIQUAM SUSCIPIT.
            </p>

            {/* Formulaire + liste */}
            <div className="flex flex-row w-full max-w-5xl border-primary mt-2">
                {/* Formulaire */}
                <form className="flex-1 flex flex-col gap-4 pr-8" action="">
                    <div className="flex gap-4">
                        <input
                            className="flex-1 border-2 border-primary px-4 py-2 text-primary placeholder:text-primary bg-transparent outline-none"
                            placeholder="ENTREZ VOTRE NOM"
                            type="text"
                        />
                        <input
                            className="flex-1 border-2 border-primary px-4 py-2 text-primary placeholder:text-primary bg-transparent outline-none"
                            placeholder="ENTREZ VOTRE PRÉNOM"
                            type="text"
                        />
                    </div>
                    <textarea
                        className="border-2 border-primary px-4 py-2 text-primary placeholder:text-primary bg-transparent outline-none min-h-[80px]"
                        placeholder="ENTREZ VOTRE DESCRIPTION"
                    />
                    <button
                        type="submit"
                        className="mt-2 bg-primary text-white font-bold py-3 w-1/2 rounded-none uppercase tracking-wider"
                    >
                        Envoyer
                    </button>
                </form>

                {/* Liste à droite */}
                <div className="flex flex-col justify-center border-l-2 border-primary items-start pl-8 min-w-[220px]">
                    <ul className="flex flex-col gap-8 w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <li key={i} className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-primary inline-block"></span>
                                <span className="text-primary font-bold uppercase">LOREM IPCUM</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}