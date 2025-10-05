"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../_components/Button";
import Bluestarsvg from "../../_components/svg/bluestar";
import CarrouselProject from "../../home/_components/carrouselProject";
import LineProject from "./lineProject";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlocContact(){
    const containerRef = useRef<HTMLDivElement>(null);
    const headerContentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const starRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const carrouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Animation du conteneur principal
        gsap.fromTo(containerRef.current, 
            {
                y: 100,
            },
            {
                y: -500,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    end: "bottom 50%",
                    scrub: 1,
                    markers: false,
                }
            }
        );

        // Animation séquentielle des éléments internes
        const elementsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: headerContentRef.current,
                start: "top 60%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        // État initial des éléments
        gsap.set([titleRef.current, starRef.current, textRef.current, buttonRef.current, carrouselRef.current], {
            opacity: 0,
            y: 50
        });

        // Animation cascade des éléments
        elementsTimeline
            .to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            })
            .to(starRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.5")
            .to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4")
            .to(buttonRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")
            .to(carrouselRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.2");

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
          <div ref={containerRef} className="px-[68px] relative min-h-[130vh] bg-green-500 h-full w-full pt-20 z-10 -mt-20">         
            <div ref={headerContentRef} className="flex flex-row w-full justify-between ">
                <div>
                    <h2 ref={titleRef} className="text-white uppercase ">Contact</h2>
                    <div ref={starRef}>
                        <Bluestarsvg />
                    </div>
                   {/*  <p ref={textRef} className="max-w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero possimus nesciunt tempora fuga eius nam officiis, unde accusamus repellat!</p>
              */}   </div>
                <div ref={buttonRef}>
                    <Button url="/galerie" texte="Voir plus" />
                </div>
            </div>
            <div ref={carrouselRef}>
                <LineProject />
              {/*   <CarrouselProject /> */}
            </div>
        </div>
    )
}