"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../_components/Button";
import Bluestarsvg from "../../_components/svg/bluestar";
import CarrouselProject from "../../home/_components/carrouselProject";
import LineProject from "./lineProject";
import Link from "next/link";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectHome(){
    const containerRef = useRef<HTMLDivElement>(null);
    const headerContentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const starRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const carrouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Animation du conteneur principal avec effet pin
      /*   gsap.fromTo(containerRef.current, 
            {
                y: 100,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    markers: false,
                }
            }
        ); */

        // Animation séquentielle des éléments internes
        const elementsTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: headerContentRef.current,
                start: "top 30%",
                end: "bottom 20%",
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
/* 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
 */
    return(
          <div ref={containerRef} className="flex flex-col justify-evenly items-center px-4 sm:px-8 md:px-12 lg:px-[68px] relative min-h-[130vh] bg-primary h-full w-full pt-0">         
            <div ref={headerContentRef} className="flex flex-col md:flex-row w-full justify-between gap-4 md:gap-0">
                <div>
                    <h2 ref={titleRef} className="text-white uppercase text-4xl sm:text-6xl lg:text-8xl font-beckam">Projets</h2>
                    <div ref={starRef}>
                        <Bluestarsvg />
                    </div>
                   {/*  <p ref={textRef} className="max-w-1/3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero possimus nesciunt tempora fuga eius nam officiis, unde accusamus repellat!</p>
              */}   </div>
                <div ref={buttonRef} className="hidden md:block p-1">
                    <Link className="border-white  border-1 border-double px-16 mt-4 button py-4 uppercase text-sm  transition-all text-white hover:bg-white hover:text-[#2A2EC5]" href="/galerie" >Voir plus</Link>
                </div>
            </div>
            <div ref={carrouselRef}>
                <LineProject />
              {/*   <CarrouselProject /> */}
            </div>
        </div>
    )
}