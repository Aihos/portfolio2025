"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BandeauTourne(){
    const bandeauRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bandeauRef.current) return;

        const bandeau = bandeauRef.current;
        
        // Animation GSAP infinie qui fait défiler horizontalement
        gsap.to(bandeau, {
            x: "-50%",
            duration: 40,
            ease: "none",
            repeat: -1,
        });

        return () => {
            gsap.killTweensOf(bandeau);
        };
    }, []);

    return(
        <div className="w-full h-40 overflow-hidden bg-primary relative flex items-center">
            <div ref={bandeauRef} className="flex flex-row gap-8 whitespace-nowrap">
                {/* Premier set */}
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">DE TOUTE BLEUTÉ</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">•</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">DE TOUTE BLEUTÉ</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">•</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">DE TOUTE BLEUTÉ</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">•</span>
                {/* Second set (duplicate pour loop infini) */}
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">DE TOUTE BLEUTÉ</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">•</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">DE TOUTE BLEUTÉ</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">•</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">DE TOUTE BLEUTÉ</span>
                <span className="uppercase beckam-font text-3xl md:text-4xl lg:text-7xl tracking-widest text-white px-4">•</span>
            </div>
        </div>
    )
}