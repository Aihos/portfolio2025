
"use client";
import { getAllProjects } from "../../../../lib/projectUtils";
import Link from "next/link";
import Image from "next/image";

export default function GalerieEnsemble(){
    const projects = getAllProjects();

    return(
        <div className="px-4 sm:px-8 md:px-12 lg:px-[68px] py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link 
                        key={project.id}
                        href={`/galerie/${project.id}`}
                        className="group block bg-white border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src={project.imgUp}
                                alt={project.nom}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 font-beckam text-sm">
                                {project.numero}
                            </div>
                            <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                                project.type === 'dev' 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-purple-500 text-white'
                            }`}>
                                {project.type === 'dev' ? 'DEV' : 'DESIGN'}
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <h3 className="font-beckam text-primary text-xl md:text-2xl uppercase mb-3 group-hover:scale-105 transition-transform">
                                {project.nom}
                            </h3>
                            
                            <p className="text-primary/70 text-sm mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="bg-primary/10 text-primary px-2 py-1 text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="text-primary/50 text-xs px-2 py-1">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className="text-primary/60 text-sm">
                                    {project.annee}
                                </span>
                                <span className="text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                                    Voir le projet →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}