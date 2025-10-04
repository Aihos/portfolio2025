
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
            <div className="container max-w-4xl mx-auto px-8">
                <div className="wrapper">
                    <p 
                        ref={textRef}
                        className="w-full text-3xl md:text-4xl lg:text-5xl leading-relaxed text-primary font-bold"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur voluptatem quae ea similique adipisci reprehenderit vero voluptatum, debitis exercitationem nisi ad mollitia? Molestias veniam sint quisquam ea et dolorum nesciunt rem saepe id, amet vero, necessitatibus esse reiciendis molestiae.
                    </p>
                </div>
            </div>
        </section>
    )
}