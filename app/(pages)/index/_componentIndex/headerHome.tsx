"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Header from "../../_components/header";
import ArrowStylisee from "../../_components/svg/ArrowStylisee";
import AffichagePoster from "../../galerie/[id]/_component/affichagePoster";

export default function HeaderHome(){
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const posterRef = useRef<HTMLDivElement>(null);
    const bottomTextRef = useRef<HTMLDivElement>(null);
    const scrollTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !titleRef.current || !posterRef.current || !bottomTextRef.current || !scrollTextRef.current) return;

        // Timeline d'animation au chargement
        const tl = gsap.timeline({ delay: 0.5 });

        // État initial : tout caché
        gsap.set([titleRef.current, posterRef.current, bottomTextRef.current, scrollTextRef.current], {
            opacity: 0,
            y: 50
        });

        // Animation séquentielle
        tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out"
        })
        .to(posterRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        }, "-=0.8")
        .to(bottomTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6")
        .to(scrollTextRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4");

        // Cleanup
        return () => {
            tl.kill();
        };
    }, []);

    return(
        <div ref={containerRef} className="bg-[url(/img/fondCarreau.png)] bg-repeat bg-contain px-[68px] min-h-[100vh] w-full flex flex-col justify-start items-center pt-20 relative">
            <Header />
            <h1 ref={titleRef} className="relative w-full text-[270px] text-center tracking-widest text-primary beckam-font">
                HUGO LERAY
            </h1>       
            <div ref={posterRef}>
                <AffichagePoster imgLeft="/img/Artémis.png" imgRight="/img/blue.jpg" imgUp="/img/Hermès.png" />
            </div>
            <div className="absolute  px-[68px] bottom-8 w-full flex flex-row justify-between items-center">
                <p ref={bottomTextRef} className="text-primary">
                    Développeur web indépendant <br />
                    Bienvenue dans mon univers bleuté
                </p>
                <div ref={scrollTextRef} className="flex flex-row gap-1">
                    <p className="text-primary font-semibold">Scroll pour descendre </p>  
                    <ArrowStylisee />
                </div>
            </div> 
        </div>
    )
}