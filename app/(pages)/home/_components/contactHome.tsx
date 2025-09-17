import Bluestarsvg from "../../_components/svg/bluestar";


export default function ContactHome(){

    return(
        <div className="relative min-h-[100vh] h-full w-full">
                   <div className="flex flex-row w-full justify-between ">
                       <div>
                           <h2 className="text-primary uppercase ">Contact</h2>
                           <Bluestarsvg />
                           <p className="max-w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero possimus nesciunt tempora fuga eius nam officiis, unde accusamus repellat!</p>
                        </div>
                   </div>
                   <div className="grid grid-cols-2 gap-2 w-full border-1 border-blue-500">
                    <form className="w-full" action="">
                        <input placeholder="entrez votre nom" type="text" />
                        <input placeholder="Entre votre prénom" type="text" />
                        <input placeholder="Entre votre description" type="text" />
                        <button type="submit">Envoyer</button>
                    </form>
                    <div className="w-full border-1 border-red-500">
                        <ul>
                            <li>insta</li>
                            <li>insta</li>
                            <li>insta</li>
                            <li>insta</li>
                        </ul>
                    </div>
                   </div>
                 
               </div>
    )
}