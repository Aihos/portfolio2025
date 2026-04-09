
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getAllProjects } from "../../../../lib/projectUtils";
import Link from "next/link";
import Image from "next/image";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GalerieEnsemble(){
    const projects = getAllProjects();
    const gridRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        if (!gridRef.current) return;

        const cards = cardsRef.current.filter(card => card !== null);
        
        // Animation au scroll pour chaque carte
        cards.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.95,
                    rotationX: 5
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse",
                        markers: false
                    },
                    delay: (index % 6) * 0.08 // Décalage pour effet cascade par rangée
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <div className="px-4 sm:px-8 md:px-12 lg:px-[68px] py-16">
            {/* Bento Grid Layout avec tailles variées */}
            <div 
                ref={gridRef}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[280px] gap-4"
                style={{ gap: ' 1rem' }}
            >
                {projects.map((project, index) => {
                    // Définir des tailles variées pour l'effet bento
                    const bentoClasses = [
                        'col-span-2 row-span-2', // Grande
                        'col-span-1 row-span-1', // Petite
                        'col-span-1 row-span-2', // Verticale
                        'col-span-2 row-span-1', // Horizontale
                        'col-span-1 row-span-1', // Petite
                        'col-span-2 row-span-2', // Grande
                    ];
                    
                    const sizeClass = bentoClasses[index % bentoClasses.length];

                    return (
                        <Link 
                            key={project.id}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            href={`/galerie/${project.id}`}
                            className={`group block overflow-hidden bg-white  hover:border-primary transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-3 ${sizeClass}`}
                        >
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src={project.imgUp}
                                    alt={project.nom}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                
                                {/* Overlay avec gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-700 ease-out" />
                                
                                {/* Badge type */}
                                <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full ${
                                    project.type === 'dev' 
                                        ? 'bg-primary text-white' 
                                        : 'bg-white text-primary'
                                }`}>
                                    {project.type === 'dev' ? 'DEV' : 'DESIGN'}
                                </div>
                                
                                {/* Contenu au survol */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
                                    <h3 className="font-beckam text-white text-xl md:text-2xl uppercase mb-2">
                                        {project.nom}
                                    </h3>
                                    
                                    <p className="text-white/80 text-sm mb-3 line-clamp-2">
                                        {project.description}
                                    </p>
                                    
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/70 text-sm">
                                            {project.annee}
                                        </span>
                                        <span className="text-white text-sm font-semibold group-hover:translate-x-2 transition-transform duration-500 ease-out">
                                            Voir →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}