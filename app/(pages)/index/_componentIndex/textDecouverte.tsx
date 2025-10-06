
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TexteDecouverte(){
    const textRef = useRef<HTMLParagraphElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const shapesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current || !sectionRef.current || !shapesRef.current) return;

        // Diviser le texte en mots
        const text = textRef.current.innerText;
        const words = text.split(" ");
        
        // Recréer le HTML avec des spans pour chaque mot
        textRef.current.innerHTML = words
            .map(word => `<span class="word opacity-20">${word}</span>`)
            .join(" ");

        const wordElements = textRef.current.querySelectorAll(".word");

        // Animation GSAP avec ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: true,
                markers: false, // Mettre à true pour débugger
            }
        });

        tl.to(wordElements, {
            opacity: 1,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out"
        });

        // Animation des formes géométriques
        const shapes = shapesRef.current.children;
        gsap.set(shapes, { opacity: 0, scale: 0, rotation: 0 });

        gsap.to(shapes, {
            opacity: 0.8,
            scale: 1,
            rotation: 360,
            duration: 2,
            stagger: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "50% center",
                toggleActions: "play none none reverse",
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <section ref={sectionRef} id="textSection" className="min-h-[110vh] w-full flex flex-row justify-center items-center bg-white relative">
            <div className="container max-w-6xl mx-auto px-8">
                <div className="wrapper">
                    <p 
                        ref={textRef}
                        className="w-full text-2xl md:text-3xl lg:text-4xl leading-relaxed text-primary font-bold"
                    >Le bleu peut être associé à de nombreuses émotions, on peut ressentir de la tristesse, du calme ou bien de la joie. Pour ma part je trouve que cette couleur est un mélange entre le sentiment d&apos;émerveillement et de beauté. Cette magnifique couleur on peut la trouver en particulier sur de nombreux paysages majestueux entre des montagnes, glaciers, lac, rivière. Ainsi je trouve que cette couleur me représente bien car elle est juste source de vie et j&apos;aimerais vous présenter avec cette couleur mon simple univers.</p>
                </div>
            </div>

            {/* Formes géométriques en bas */}
            <div ref={shapesRef} className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8 pointer-events-none">
                {/* Cercles */}
                <div className="w-12 h-12 bg-primary rounded-full"></div>
                <div className="w-8 h-8 bg-primary rounded-full"></div>
                <div className="w-16 h-16 bg-primary rounded-full"></div>
                
                {/* Carrés */}
                <div className="w-10 h-10 bg-primary"></div>
                <div className="w-14 h-14 bg-primary"></div>
                <div className="w-6 h-6 bg-primary"></div>
                
                {/* Plus de cercles */}
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div className="w-12 h-12 bg-primary"></div>
            </div>
        </section>
    )
}