

export interface ProjectList{
    id: string,
    nom: string,
    description: string,
    type: "dev" | "graph",
    imgLeft: string,
    imgRight: string,
    imgUp: string,
    imgGallery: string[],
    descriptionLongue: string,
    numero: string,
    siteUrl?: string,
    technologies: string[],
    annee: string
}

export const Projects : ProjectList[] = [
    {
        id: "0",
        nom: "Ohia agence web",
        description: "Site vitrine pour l'agence web éthique Ohia.",
        type: "dev",
        imgLeft: "/img/ohia/hero.png",
        imgRight: "/img/ohia/hero.png",
        imgUp: "/img/ohia/hero.png",
        imgGallery: ["/img/ohia/hero.png"],
        descriptionLongue: "SITE VITRINE POUR L'AGENCE WEB ÉTHIQUE OHIA, PRÉSENTANT SES SERVICES ET SON APPROCHE ÉTHIQUE DU WEB MODERNE, AVEC UN ASSISTANT IA DE DÉMONSTRATION POUR ACCOMPAGNER ARTISANS ET ENTREPRISES.",
        numero: "00",
        siteUrl: "https://ohiavitrine.vercel.app/",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
        annee: "2025"
    },
    {
        id: "1",
        nom: "Gîte de la Vigne",
        description: "Site vitrine pour le Gîte de la Vigne, à Bagnoles de l'Orne en Normandie.",
        type: "dev",
        imgLeft: "/img/gite/chambre1.jpg",
        imgRight: "/img/gite/chambre2.jpg",
        imgUp: "/img/gite/giteVueHaut.jpg",
        imgGallery: ["/img/gite/giteVueHaut.jpg", "/img/gite/chambre1.jpg", "/img/gite/chambre2.jpg", "/img/gite/chambre3.jpg", "/img/gite/dortoire.jpg", "/img/gite/hero-site.png"],
        descriptionLongue: "SITE VITRINE DYNAMIQUE POUR LE GÎTE DE LA VIGNE, OFFRANT UNE PRÉSENTATION ATTRACTIVE DES SERVICES ET AMÉNAGEMENTS. INTÉGRATION D'UN SYSTÈME DE RÉSERVATION EN LIGNE ET OPTIMISATION POUR LES MOTEURS DE RECHERCHE.",
        numero: "01",
        siteUrl: "https://gite-vigne.vercel.app/",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        annee: "2025"
    },
    {
        id: "2",
        nom: "Ohia · Prospection SIRENE",
        description: "Application web de prospection B2B basée sur l'API SIRENE (Siren & Siret).",
        type: "dev",
        imgLeft: "/img/sirene/hero.png",
        imgRight: "/img/sirene/hero.png",
        imgUp: "/img/sirene/hero.png",
        imgGallery: ["/img/sirene/hero.png"],
        descriptionLongue: "APPLICATION WEB DE PROSPECTION B2B BASÉE SUR L'API SIRENE ET SIRET, PERMETTANT DE TROUVER LES ENTREPRISES FRAÎCHEMENT CRÉÉES PAR DÉPARTEMENT ET CODE NAF. EXPORT CSV, RECHERCHE AVANCÉE ET VEILLE AUTOMATISÉE.",
        numero: "02",
        siteUrl: "https://sireneapp.vercel.app/",
        technologies: ["Next.js", "TypeScript", "API SIRENE", "MongoDB", "Tailwind CSS"],
        annee: "2026"
    },
    {
        id: "3",
        nom: "The Search",
        description: "Jeu vidéo d'aventure développé en solo sur Unity.",
        type: "dev",
        imgLeft: "/img/projets/thesearch-affiche.webp",
        imgRight: "/img/projets/thesearch-game.png",
        imgUp: "/img/projets/thesearch-affiche.webp",
        imgGallery: ["/img/projets/thesearch-affiche.webp", "/img/projets/thesearch-game.png"],
        descriptionLongue: "JEU VIDÉO D'AVENTURE DÉVELOPPÉ EN SOLO SUR UNITY, OFFRANT UNE EXPÉRIENCE IMMERSIVE AVEC DES GRAPHISMES PIXEL ART RÉALISÉS SUR ASEPRITE. LE THÈME CENTRAL DU JEU EST LE VOYAGE.",
        numero: "03",
        siteUrl: "https://thesearch.netlify.app/",
        technologies: ["Unity", "C#", "Aseprite", "Game Development", "UI/UX Design"],
        annee: "2023"
    },
    {
        id: "4",
        nom: "Draconis",
        description: "Site vitrine du jeu vidéo Draconis, projet de fin d'études.",
        type: "dev",
        imgLeft: "/img/draconis/sorciere.png",
        imgRight: "/img/draconis/necromancien.png",
        imgUp: "/img/draconis/poster.png",
        imgGallery: ["/img/draconis/poster.png", "/img/draconis/assassin.png", "/img/draconis/barde.png", "/img/draconis/necromancien.png", "/img/draconis/sorciere.png"],
        descriptionLongue: "SITE VITRINE ONE PAGE DÉDIÉ AU JEU VIDÉO DRACONIS, PROJET DE FIN D'ÉTUDES DÉVELOPPÉ SOUS UNITY. PRÉSENTATION DE L'UNIVERS, DES CLASSES DE PERSONNAGES ET DE L'ÉQUIPE, AVEC UN DESIGN UX/UI SOIGNÉ.",
        numero: "04",
        siteUrl: "https://draconis.netlify.app/",
        technologies: ["HTML/CSS", "JavaScript", "Unity", "UX/UI Design"],
        annee: "2023"
    },
    {
        id: "5",
        nom: "PokeCenter",
        description: "Modélisation 3D d'une Pokéball personnalisable (PlayCanvas).",
        type: "dev",
        imgLeft: "/img/projets/pokecenter-affiche.webp",
        imgRight: "/img/pokecenter/site.png",
        imgUp: "/img/projets/pokecenter-affiche.webp",
        imgGallery: ["/img/projets/pokecenter-affiche.webp", "/img/pokecenter/site.png"],
        descriptionLongue: "PROJET DE MODÉLISATION 3D D'UNE POKÉBALL RÉALISÉE SUR BLENDER, INTÉGRÉE DANS PLAY CANVAS. LE JAVASCRIPT PERMET DE CHANGER LA COULEUR DE LA TEXTURE EN TEMPS RÉEL SUR UN PETIT SITE DÉDIÉ.",
        numero: "05",
        siteUrl: "https://pokecentercustom.netlify.app/",
        technologies: ["Blender", "PlayCanvas", "JavaScript", "HTML/CSS", "3D Modeling"],
        annee: "2023"
    },
    {
        id: "6",
        nom: "Affiche dieux de l'Olympe",
        description: "Collection d'affiches des dieux de l'Olympe.",
        type: "graph",
        imgLeft: "/img/Artémis.png",
        imgRight: "/img/Hermès.png",
        imgUp: "/img/Artémis.png",
        imgGallery: ["/img/Artémis.png", "/img/Hermès.png", "/img/blue.jpg"],
        descriptionLongue: "COLLECTION D'AFFICHES ILLUSTRANT LES DIEUX DE L'OLYMPE, RÉALISÉES SUR AFFINITY DESIGNER ET FIGMA. UN TRAVAIL DE CRÉATION GRAPHIQUE AUTOUR DE LA MYTHOLOGIE GRECQUE.",
        numero: "06",
        technologies: ["Affinity", "Figma"],
        annee: "2025"
    },
    {
        id: "7",
        nom: "Diorama 3D",
        description: "Diorama 3D réalisé avec Blender.",
        type: "graph",
        imgLeft: "/img/diorama.png",
        imgRight: "/img/diorama.png",
        imgUp: "/img/diorama.png",
        imgGallery: ["/img/diorama.png"],
        descriptionLongue: "DIORAMA 3D CRÉÉ AVEC BLENDER, METTANT EN SCÈNE UN ENVIRONNEMENT DÉTAILLÉ AVEC UN RENDU SOIGNÉ.",
        numero: "07",
        technologies: ["Blender", "3D Modeling", "Rendering"],
        annee: "2024"
    },
    {
        id: "8",
        nom: "Site vitrine cocktail",
        description: "Site vitrine pour un bar à cocktails.",
        type: "dev",
        imgLeft: "/img/Artémis.png",
        imgRight: "/img/blue.jpg",
        imgUp: "/img/Hermès.png",
        imgGallery: ["/img/Artémis.png", "/img/blue.jpg", "/img/Hermès.png"],
        descriptionLongue: "SITE VITRINE POUR UN BAR À COCKTAILS, PRÉSENTANT LA CARTE, L'AMBIANCE ET LES ÉVÉNEMENTS. DESIGN RESPONSIVE ET ANIMATIONS FLUIDES.",
        numero: "08",
        technologies: ["HTML/CSS", "JavaScript", "Responsive Design"],
        annee: "2025"
    },
]

export function getProjectById(id: string): ProjectList | undefined {
    return Projects.find(project => project.id === id);
}

export function getAllProjects(): ProjectList[] {
    return Projects;
}