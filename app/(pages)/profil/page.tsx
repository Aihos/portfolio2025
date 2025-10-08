"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bluestarsvg from "../_components/svg/bluestar";

// Registrer le plugin ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProfilPage(){
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const factsRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const [currentFact, setCurrentFact] = useState(0);

    const funFacts = [
        "Je code en buvant 12 cafés par jour ☕",
        "Mon IDE préféré ? VS Code en mode sombre évidemment 🌙",
        "Je rêve en JavaScript depuis 2020 💭",
        "Mes bugs favoris sont ceux du vendredi à 18h 🐛",
        "Je collectionne les erreurs 404 comme d'autres les timbres 📮",
        "Mon stack ? React, Next.js et beaucoup de patience 🚀"
    ];

    const crazySkills = [
        { skill: "Débugger en dormant", level: "Expert 🛌" },
        { skill: "Transformer le café en code", level: "Ninja ☕" },
        { skill: "Parler aux serveurs", level: "Fluent 🖥️" },
        { skill: "Dompter les APIs", level: "Maître 🦁" },
        { skill: "Résoudre les problèmes à 3h du matin", level: "Légende 🌙" },
        { skill: "Faire semblant de comprendre les regex", level: "Acteur 🎭" }
    ];

    useEffect(() => {
        if (!containerRef.current) return;

        // Animation d'entrée du titre
        gsap.fromTo(titleRef.current, 
            { 
                y: -100, 
                rotation: -10, 
                opacity: 0 
            },
            { 
                y: 0, 
                rotation: 0, 
                opacity: 1, 
                duration: 1.5, 
                ease: "bounce.out",
                delay: 0.5
            }
        );

        // Animation des facts
        gsap.fromTo(factsRef.current?.children || [], 
            { 
                scale: 0, 
                rotation: 180, 
                opacity: 0 
            },
            { 
                scale: 1, 
                rotation: 0, 
                opacity: 1, 
                duration: 0.8, 
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: factsRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animation des skills avec effet de vague
        gsap.fromTo(skillsRef.current?.children || [], 
            { 
                x: -200, 
                opacity: 0,
                skewX: 20 
            },
            { 
                x: 0, 
                opacity: 1,
                skewX: 0, 
                duration: 1, 
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Rotation automatique des fun facts
        const factInterval = setInterval(() => {
            setCurrentFact((prev) => (prev + 1) % funFacts.length);
        }, 3000);

        return () => {
            clearInterval(factInterval);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [funFacts.length]);

    return(
        <div ref={containerRef} className="min-h-screen bg-white relative overflow-hidden pt-20">
            {/* Formes décoratives animées */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute top-32 right-20 w-16 h-16 bg-primary transform rotate-45 animate-pulse"></div>
                <div className="absolute bottom-20 left-32 w-12 h-12 bg-primary rounded-full animate-ping"></div>
                <div className="absolute bottom-40 right-10 w-24 h-24 border-4 border-primary animate-spin"></div>
            </div>

            {/* Header loufoque */}
            <div className="text-center px-4 sm:px-8 md:px-12 lg:px-[68px] py-20">
                <h1 
                    ref={titleRef}
                    className="text-6xl sm:text-8xl lg:text-9xl font-beckam text-primary mb-8 transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                    HUGO.EXE
                </h1>
                <div className="flex justify-center mb-8">
                    <Bluestarsvg />
                </div>
                <p className="text-xl md:text-2xl text-primary max-w-3xl mx-auto leading-relaxed">
                    Développeur web qui transforme le café en code depuis 2020 ☕ → 💻
                </p>
            </div>

            {/* Fun Facts Section */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-[68px] py-16 bg-primary/5">
                <h2 className="text-4xl md:text-6xl font-beckam text-primary text-center mb-12">
                    FACTS BIZARRES
                </h2>
                
                {/* Fact rotatif */}
                <div className="text-center mb-12">
                    <div className="bg-primary text-white p-6 rounded-2xl max-w-2xl mx-auto transform hover:rotate-2 transition-transform duration-300">
                        <p className="text-lg md:text-xl font-semibold">
                            {funFacts[currentFact]}
                        </p>
                    </div>
                </div>

                {/* Grille de facts */}
                <div ref={factsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        "🎵 J'écoute de la lo-fi en codant",
                        "🌮 Je code mieux après avoir mangé des tacos",
                        "🎮 Mes pauses sont sur Tetris",
                        "📚 Je lis la doc comme d'autres lisent des romans",
                        "🎨 Mon CSS est plus propre que ma chambre",
                        "🚀 Mon objectif : coloniser Mars avec du JavaScript"
                    ].map((fact, index) => (
                        <div 
                            key={index}
                            className="bg-white border-2 border-primary p-6 text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
                        >
                            <p className="font-semibold">{fact}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-[68px] py-16">
                <h2 className="text-4xl md:text-6xl font-beckam text-primary text-center mb-12">
                    SUPER POUVOIRS
                </h2>
                
                <div ref={skillsRef} className="max-w-4xl mx-auto space-y-6">
                    {crazySkills.map((item, index) => (
                        <div 
                            key={index}
                            className="flex flex-col md:flex-row justify-between items-center bg-primary/10 p-6 border-l-4 border-primary hover:bg-primary hover:text-white transition-all duration-300 group"
                        >
                            <span className="text-lg md:text-xl font-semibold mb-2 md:mb-0 group-hover:animate-pulse">
                                {item.skill}
                            </span>
                            <span className="bg-primary text-white px-4 py-2 font-beckam group-hover:bg-white group-hover:text-primary transition-all duration-300">
                                {item.level}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section loufoque finale */}
            <div className="px-4 sm:px-8 md:px-12 lg:px-[68px] py-20 bg-primary text-white text-center">
                <h2 className="text-3xl md:text-5xl font-beckam mb-8">
                    ATTENTION ! ⚠️
                </h2>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
                    Développeur en liberté. Peut causer des applications web addictives, 
                    des interfaces trop belles, et une consommation excessive de café.
                </p>
                <div className="flex justify-center space-x-4 animate-bounce">
                    <span className="text-6xl">🤓</span>
                    <span className="text-6xl">😎</span>
                    <span className="text-6xl">🤪</span>
                    <span className="text-6xl">😜</span>
                    <span className="text-6xl">🤯</span>
                    <span className="text-6xl">🥸</span>
                    <span className="text-6xl">😵‍💫</span>
                    <span className="text-6xl">🤖</span>
                    <span className="text-6xl">🚀</span>
                    <span className="text-6xl">💻</span>
                    <span className="text-6xl">⚡</span>
                    <span className="text-6xl">🔥</span>
                    <span className="text-6xl">🎯</span>
                    <span className="text-6xl">🧠</span>
                    <span className="text-6xl">⭐</span>
                    <span className="text-6xl">🎉</span>
                    <span className="text-6xl">🦄</span>
                    <span className="text-6xl">👨‍💻</span>
                    <span className="text-6xl">🎮</span>
                    <span className="text-6xl">🌟</span>
                </div>
            </div>
        </div>
    )
}