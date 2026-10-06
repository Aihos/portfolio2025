"use client"
import Image from "next/image";
import { useState } from "react";

export default function GaleriePrint({listeImg}: {listeImg : string[]}){
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openCarousel = (index: number) => {
        setCurrentImageIndex(index);
        setIsCarouselOpen(true);
    };

    const closeCarousel = () => {
        setIsCarouselOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % listeImg.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + listeImg.length) % listeImg.length);
    };

    return(
       <div className="w-full max-w-6xl mx-auto p-4">
            <div className="grid h-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {listeImg.map((imgUrl, index) => (
                    <div 
                        key={index} 
                        className="aspect-square overflow-hidden bg-gray-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => openCarousel(index)}
                    >
                        <Image
                            src={imgUrl}
                            alt={`Image ${index + 1}`}
                            width={600}
                            height={600}
                            quality={90}
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 211px"
                            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                        />
                    </div>
                ))}
            </div>

            {/* Modal Carrousel */}
            {isCarouselOpen && (
                <div 
                    className="fixed max-h-screen h-full inset-0 bg-black/50 backdrop-blur-2xl bg-opacity-90 z-[9999] flex items-center justify-center"
                    onClick={closeCarousel}
                >
                    {/* Bouton fermer */}
                    <button
                        onClick={closeCarousel}
                        className="absolute top-4 right-4 text-white text-3xl hover:text-primary transition z-10"
                        aria-label="Fermer"
                    >
                        ✕
                    </button>

                    {/* Bouton précédent */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 text-white text-4xl hover:text-primary transition z-10"
                        aria-label="Image précédente"
                    >
                        ‹
                    </button>

                    {/* Image principale */}
                    <div 
                        className="relative w-[92vw] h-[85vh] max-w-7xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={listeImg[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                            fill
                            quality={95}
                            sizes="(max-width: 1391px) 92vw, 1280px"
                            className="object-contain"
                        />
                    </div>

                    {/* Bouton suivant */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 text-white text-4xl hover:text-primary transition z-10"
                        aria-label="Image suivante"
                    >
                        ›
                    </button>

                    {/* Indicateurs */}
                    <div 
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {listeImg.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition ${
                                    index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                                }`}
                                aria-label={`Aller à l'image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}