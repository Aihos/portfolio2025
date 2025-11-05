
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TexteDecouverte(){
    const textRef = useRef<HTMLParagraphElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const shapesRef = useRef<HTMLDivElement>(null);
    const floatingImagesRef = useRef<HTMLDivElement[]>([]);

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

        // Animation des images flottantes
        floatingImagesRef.current.forEach((img, index) => {
            if (img) {
                gsap.fromTo(img, 
                    { 
                        y: 0,
                        opacity: 0.6
                    },
                    {
                        y: -400,
                        opacity: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top top",
                            end: "+=150%",
                            scrub: 1 + (index * 0.3), // Vitesses différentes pour chaque image
                            markers: false,
                        }
                    }
                );
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <section ref={sectionRef} id="textSection" className="min-h-[110vh] w-full flex flex-row justify-center items-center bg-white relative overflow-hidden">
            {/* Images flottantes */}
            <div 
                ref={(el) => { if (el) floatingImagesRef.current[0] = el; }}
                className="absolute left-[10%] top-[60%] w-32 md:w-48 lg:w-64 opacity-60 pointer-events-none z-0"
            >
                <Image 
                    src="/img/Artémis.png" 
                    alt="Floating decoration"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                />
            </div>

            <div 
                ref={(el) => { if (el) floatingImagesRef.current[1] = el; }}
                className="absolute right-[15%] top-[70%] w-24 md:w-36 lg:w-48 opacity-60 pointer-events-none z-0"
            >
                <Image 
                    src="/img/Hermès.png" 
                    alt="Floating decoration"
                    width={250}
                    height={250}
                    className="w-full h-auto"
                />
            </div>

            <div 
                ref={(el) => { if (el) floatingImagesRef.current[2] = el; }}
                className="absolute left-[20%] top-[40%] w-20 md:w-32 lg:w-40 opacity-50 pointer-events-none z-0"
            >
                <Image 
                    src="/img/blue.jpg" 
                    alt="Floating decoration"
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-full"
                />
            </div>

            <div 
                ref={(el) => { if (el) floatingImagesRef.current[3] = el; }}
                className="absolute right-[8%] top-[50%] w-28 md:w-40 lg:w-52 opacity-60 pointer-events-none z-0"
            >
                <Image 
                    src="/img/Artémis.png" 
                    alt="Floating decoration"
                    width={280}
                    height={280}
                    className="w-full h-auto"
                />
            </div>

            <div className="container max-w-6xl mx-auto px-8 relative z-10">
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