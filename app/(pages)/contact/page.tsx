import Header from "../_components/header";


export default function PageContact(){

    return(
         <div className="relative bg-[url(/img/fondCarreau.png)] bg-repeat bg-contain min-h-[100vh] w-full flex flex-col justify-center items-center">
                   <Header />
                           <h1 className="w-full text-center font-beckam text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none uppercase">Contact</h1>
       
                             <div className="absolute px-4 md:px-[68px] bottom-8 w-full flex flex-row justify-between items-start">
                                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                                            GitHub
                                        </a>
                                        <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                                            Instagram
                                        </a>
                                        <a href="https://behance.net/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                                            Behance
                                        </a>
                                        <a href="mailto:your.email@example.com" className="text-primary hover:opacity-80 transition-opacity">
                                            Email
                                        </a>
                                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80 transition-opacity">
                                            LinkedIn
                                        </a>
                                       </div> 
                       </div>
    )

}