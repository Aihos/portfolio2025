"use client"
import CardProject from "./cardProject";
import { useState } from "react";

const projects = [
  { id: 1, titre: "Blue Flower", desc: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA AT MASSA VITAE ODIO EU SCELERISQUE TURPIS. AT MATTIS ", img: "/img/Artémis.png" },
  { id: 2, titre: "August", desc: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA VITAE ODIO EU SCELERISQUE...", img: "/img/Artémis.png" },
  { id: 3, titre: "Portfolio", desc: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA VITAE ODIO EU SCELERISQUE...", img: "/img/Artémis.png" },
  { id: 4, titre: "Design", desc: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA VITAE ODIO EU SCELERISQUE...", img: "/img/Artémis.png" },
  { id: 5, titre: "Web App", desc: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA VITAE ODIO EU SCELERISQUE...", img: "/img/Artémis.png" },
];

export default function CarrouselProject(){
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setSelectedCard(selectedCard === id ? null : id);
    };

    return(
        <div className="relative w-full mt-6">
            <div className="min-h-[50vh] flex flex-row overflow-x-scroll w-full gap-4 no-scrollbar">
                {projects.map((project) => (
                    <CardProject 
                        key={project.id}
                        titre={project.titre} 
                        desc={project.desc}
                        img={project.img}
                        isOpen={selectedCard === project.id}
                        onClick={() => handleCardClick(project.id)}
                    />
                ))}
            </div>
        </div>
    )
}