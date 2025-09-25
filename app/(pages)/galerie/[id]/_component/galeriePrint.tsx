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
            <div className="grid h-full grid-cols-5 gap-4">
                {listeImg.map((imgUrl, index) => (
                    <div 
                        key={index} 
                        className="aspect-square overflow-hidden bg-gray-100 hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => openCarousel(index)}
                    >
                        <Image
                            src={imgUrl}
                            alt={`Image ${index + 1}`}
                            width={200}
                            height={400}
                            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                        />
                    </div>
                ))}
            </div>

            {/* Modal Carrousel */}
            {isCarouselOpen && (
                <div className="fixed max-h-screen h-full inset-0 bg-black/50 backdrop-blur-2xl bg-opacity-90 z-50 flex items-center justify-center">
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
                        onClick={prevImage}
                        className="absolute left-4 text-white text-4xl hover:text-primary transition z-10"
                        aria-label="Image précédente"
                    >
                        ‹
                    </button>

                    {/* Image principale */}
                    <div className="relative max-w-4xl max-h-[90vh] mx-8">
                        <Image
                            src={listeImg[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                            width={400}
                            height={800}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Bouton suivant */}
                    <button
                        onClick={nextImage}
                        className="absolute right-4 text-white text-4xl hover:text-primary transition z-10"
                        aria-label="Image suivante"
                    >
                        ›
                    </button>

                    {/* Indicateurs */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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