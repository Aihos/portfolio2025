"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineObject from "./lineObject";
import { Projects } from "@/lib/projectUtils";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LineProject(){

    const containerRef = useRef<HTMLDivElement>(null);
    const projectEnsemble = Projects

    useEffect(() => {
        if (!containerRef.current) return;

        const items = containerRef.current.children;

        // Animation simple up pour chaque élément
        gsap.fromTo(items, 
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                }
            }
        );

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <div ref={containerRef} className="flex flex-col w-full gap-4">
            {projectEnsemble.map((project, index) => (
                <LineObject 
                    key={index}
                    nom={project.nom}
                />
            ))}
        </div>
    )
}