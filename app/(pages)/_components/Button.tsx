

export default function Button({texte, className} : {texte: string, className : string}){

    return(
        <button className={`px-16 py-4 border-1 uppercase text-sm text-primary border-[#2A2EC5] ` + className}>
            {texte}
        </button>
    )

}