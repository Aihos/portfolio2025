

export default function Button({texte, className} : {texte: string, className ?: string}){

    return(
        <button className={`px-16 mt-4 button py-4 border-1 uppercase text-sm text-primary transition-all bg-white hover:bg-primary border-[#2A2EC5] ` + className}>
            {texte}
        </button>
    )

}