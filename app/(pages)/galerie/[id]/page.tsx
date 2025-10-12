import Image from "next/image"
import AffichagePoster from "./_component/affichagePoster"
import GaleriePrint from "./_component/galeriePrint"
import { getProjectById, getAllProjects } from "../../../../lib/projectUtils"
import { notFound } from "next/navigation"
import Link from "next/link"

interface PageProps {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default function PageId({ params }: PageProps){
    const project = getProjectById(params.id);
    
    if (!project) {
        notFound();
    }

    return(
        <div className="min-h-screen w-full bg-white relative overflow-hidden pt-20">
             {/* Section centrale avec poster */}
             <div className="flex flex-col justify-center items-center gap-8 px-4 sm:px-8 md:px-12 lg:px-[68px] py-16">
                  <h1 className="w-full text-center font-beckam text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none uppercase mb-6">
                        {project.nom}
                    </h1>
                     <p className="max-w-4xl text-primary text-sm sm:text-base mb-8 leading-relaxed text-center">
                        {project.description}
                    </p>
 {/* Section simplifiée pour les projets graphiques */}
            {project.type === "graph" && (
                <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-[68px] py-16">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <h2 className="font-beckam text-primary text-4xl sm:text-6xl md:text-7xl leading-none uppercase">
                                {project.numero}
                            </h2>
                            <div className="text-primary/60 text-lg">
                                {project.annee}
                            </div>
                        </div>
                        
                        <h3 className="font-beckam text-primary text-xl sm:text-2xl md:text-3xl leading-none uppercase mb-6">
                            PROJET GRAPHIQUE
                        </h3>

                        {/* Technologies/Outils pour le graphisme */}
                        <div className="mb-8">
                            <h4 className="text-primary font-semibold mb-3 uppercase tracking-wide">Outils utilisés :</h4>
                            <div className="flex flex-wrap justify-center gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="bg-primary/10 text-primary px-3 py-1 text-sm border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bouton retour */}
                        <Link 
                            href="/galerie"
                            className="inline-block border-2 border-primary text-primary font-bold py-3 px-8 uppercase tracking-wider hover:bg-primary hover:text-white transition-all"
                        >
                            RETOUR GALERIE
                        </Link>
                    </div>
                </div>
            )}
                {/* Section détaillée avec image - Affichée uniquement pour les projets de développement */}
            {project.type === "dev" && (
                <div className="flex flex-col lg:flex-row min-h-[50vh] items-center px-4 sm:px-8 md:px-12 lg:px-[68px] py-16">
                    {/* Section gauche - Titre et description */}
                    <div className="flex-1 flex flex-col justify-center lg:pr-12 mb-8 lg:mb-0">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="font-beckam text-primary text-6xl sm:text-7xl md:text-8xl leading-none uppercase">
                                {project.numero}
                            </h2>
                            <div className="text-primary/60 text-sm">
                                {project.annee}
                            </div>
                        </div>
                        
                        <h3 className="font-beckam text-primary text-2xl sm:text-3xl md:text-4xl leading-none uppercase mb-6">
                            {project.nom}
                        </h3>

                        {/* Technologies */}
                        <div className="mb-6">
                            <h4 className="text-primary font-semibold mb-3 uppercase tracking-wide">Technologies utilisées :</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span 
                                        key={index}
                                        className="bg-primary/10 text-primary px-3 py-1 text-sm border border-primary/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Boutons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {project.siteUrl && (
                                <a 
                                    href={project.siteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-primary text-primary font-bold py-3 px-8 uppercase tracking-wider hover:bg-primary hover:text-white transition-all text-center"
                                >
                                    VOIR LE SITE
                                </a>
                            )}
                            <Link 
                                href="/galerie"
                                className="border-2 border-primary/40 text-primary/80 font-bold py-3 px-8 uppercase tracking-wider hover:border-primary hover:text-primary transition-all text-center"
                            >
                                RETOUR GALERIE
                            </Link>
                        </div>
                    </div>

                    {/* Section droite - Image */}
                    <div className="flex-1 relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image 
                                src={project.imgGallery[0]} 
                                alt={project.nom}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            )}   
             <AffichagePoster 
                        imgLeft={project.imgLeft} 
                        imgRight={project.imgRight} 
                        imgUp={project.imgUp} 
                    />

                    <p className="max-w-5xl text-primary text-xs sm:text-sm mb-8 leading-relaxed text-center">
                        {project.descriptionLongue}
                    </p>
                    
                    <GaleriePrint listeImg={project.imgGallery} />
             </div>
           
            

           
        </div>
    )
}