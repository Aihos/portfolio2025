export default function Header(){

    return(
        <div className="absolute top-0 w-full grid grid-cols-3  justify-between justify-items-center items-center bg-white min-h-[10vh]">
            <div></div>
            <ul className="flex flex-row gap-1">
                <li className="text-primary">INDEX /</li>
                <li className="text-primary">PROFIL /</li>
                <li className="text-primary">PROJETS</li>
            </ul>
            <p className="w-full text-right text-primary uppercase">hugoleray53@gmail.com</p>
        </div>
    )
}