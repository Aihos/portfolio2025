"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BubbleMenu from "./BubbleMenu";
import Link from "next/link";

export default function Header(){
    const headerRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    const emailRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!headerRef.current || !navRef.current || !emailRef.current) return;

        // Timeline d'animation au chargement
        const tl = gsap.timeline({ delay: 0.2 });

        // État initial : éléments cachés
        gsap.set([navRef.current, emailRef.current], {
            opacity: 0,
            y: -30
        });

        // Animation séquentielle du header
        tl.to(navRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .to(emailRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.6");

        // Cleanup
        return () => {
            tl.kill();
        };
    }, []);

    return(
        <div ref={headerRef} className="px-4 sm:px-8 md:px-12 lg:px-[68px] absolute top-0 w-full grid grid-cols-2 md:grid-cols-3 justify-between justify-items-center items-center bg-white min-h-[8vh] sm:min-h-[10vh] z-50">
            <div><BubbleMenu /></div>
            <ul ref={navRef} className="hidden md:flex flex-row gap-1 text-xs lg:text-sm">
                <Link href={"/index"} className="text-primary border-b-1/0 hover:border-b-1 cursor-pointer transition-all duration-200">INDEX /</Link>
                {/* <Link href={"/profil"} className="text-primary border-b-1/0 hover:border-b-1 cursor-pointer transition-all duration-200">PROFIL /</Link> */}
                <Link href={"/galerie"} className="text-primary border-b-1/0 hover:border-b-1 cursor-pointer transition-all duration-200">PROJETS</Link>
            </ul>
            <Link href="mailto:hugoleray53@gmail.com" className="w-full text-right text-primary uppercase text-xs sm:text-sm lg:text-base truncate">hugoleray53@gmail.com</Link>
        </div>
    )
}