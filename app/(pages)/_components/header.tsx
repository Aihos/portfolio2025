"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import BubbleMenu from "./BubbleMenu";

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
        <div ref={headerRef} className=" px-[68px] absolute top-0 w-full grid grid-cols-3  justify-between justify-items-center items-center bg-white min-h-[10vh]">
            <div><BubbleMenu /></div>
            <ul ref={navRef} className="flex flex-row gap-1">
                <li className="text-primary">INDEX /</li>
                <li className="text-primary">PROFIL /</li>
                <li className="text-primary">PROJETS</li>
            </ul>
            <p ref={emailRef} className="w-full text-right text-primary uppercase">hugoleray53@gmail.com</p>
        </div>
    )
}