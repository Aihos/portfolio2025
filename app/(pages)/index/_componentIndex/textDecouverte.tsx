
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

    useEffect(() => {
        if (!textRef.current || !sectionRef.current) return;

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

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <section ref={sectionRef} id="textSection" className="min-h-[110vh] w-full flex flex-row justify-center items-center bg-white">
            <div className="container max-w-6xl mx-auto px-8">
                <div className="wrapper">
                    <p 
                        ref={textRef}
                        className="w-full text-2xl md:text-3xl lg:text-4xl leading-relaxed text-primary font-bold"
                    >Le bleu peut être associé à de nombreuses émotions, on peut ressentir de la tristesse, du calme ou bien de la joie. Pour ma part je trouve que cette couleur est un mélange entre le sentiment d&apos;émerveillement et de beauté. Cette magnifique couleur on peut la trouver en particulier sur de nombreux paysages majestueux entre des montagnes, glaciers, lac, rivière. Ainsi je trouve que cette couleur me représente bien car elle est juste source de vie et j&apos;aimerais vous présenter avec cette couleur mon simple univers.</p>
                </div>
            </div>
        </section>
    )
}