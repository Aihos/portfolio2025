"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../_components/Button";
import Bluestarsvg from "../../_components/svg/bluestar";
import CarrouselProject from "./carrouselProject";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectHome(){
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Animation scroll avec translate et scale
        gsap.fromTo(containerRef.current, 
            {
                y: 100,
                opacity: 0.7
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: 1,
                    markers: false, // Mettre à true pour débugger
                }
            }
        );

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
          <div ref={containerRef} className="relative min-h-[100vh] mt-20 h-full w-full">
            <div className="flex flex-row w-full justify-between ">
                <div >
                    <h2 className="text-primary uppercase ">Projets</h2>
                    <Bluestarsvg />
                    <p className="max-w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero possimus nesciunt tempora fuga eius nam officiis, unde accusamus repellat!</p>
                 </div>
               <Button url="/galerie" texte="Voir plus" />
            </div>
            <div>
                <CarrouselProject />
            </div>
        </div>
    )
}