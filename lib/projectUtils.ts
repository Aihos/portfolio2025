

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
        id: "1",
        nom: "Gite de la vigne",
        description: "site vitrine pour l'endroit Gite de la VIgne, situé à Bagnoles de l'Orne en Normandie.",
        type: "dev",
        imgLeft: "/img/Artémis.png",
        imgRight: "/img/blue.jpg", 
        imgUp: "/img/Hermès.png",
        imgGallery: ["/img/Artémis.png", "/img/blue.jpg", "/img/Hermès.png"],
        descriptionLongue: "SITE VITRINE DYNAMIQUE POUR LE GÎTE DE LA VIGNE, OFFRANT UNE PRÉSENTATION ATTRACTIVE DES SERVICES ET AMÉNAGEMENTS. INTÉGRATION D'UN SYSTÈME DE RÉSERVATION EN LIGNE ET OPTIMISATION POUR LES MOTEURS DE RECHERCHE.",
        numero: "01",
        siteUrl: "https://gite-vigne.vercel.app/",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        annee: "2025"
    },
    {
        id: "2",
        nom: "WepApp API Siren et Siret",
        description: "Application web utilisant l'API Siren et Siret pour la recherche de clients récent danc le département Mayennais.",
        type: "dev",
        imgLeft: "/img/Hermès.png",
        imgRight: "/img/Artémis.png",
        imgUp: "/img/blue.jpg",
        imgGallery: ["/img/Hermès.png", "/img/Artémis.png", "/img/blue.jpg"],
        descriptionLongue: "Application web utilisant l'API Siren et Siret pour la recherche de clients récents dans le département Mayennais.",
        numero: "02",
        siteUrl: "https://splendorous-caramel-30db85.netlify.app/",
        technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
        annee: "2024"
    },
    {
        id: "3",
        nom: "The Search Unity Game",
        description: "Système de design et composants UI réutilisables",
        type: "dev",
        imgLeft: "/img/blue.jpg",
        imgRight: "/img/Hermès.png",
        imgUp: "/img/Artémis.png",
        imgGallery: ["/img/blue.jpg", "/img/Hermès.png", "/img/Artémis.png"],
        descriptionLongue: " JEU VIDÉO D'AVENTURE EN UNITY, OFFRANT UNE EXPÉRIENCE IMMERSIVE AVEC UN DESIGN SOIGNÉ ET UNE INTERACTION FLUIDE. INCLUT DES NIVEAUX VARIÉS ET DES DÉFIS CAPTIVANTS POUR LES JOUEURS.",
        numero: "03",
        siteUrl: "https://thesearch.netlify.app/",
        technologies: ["Unity", "C#", "UI/UX Design", "Game Development", "Aseprite"],
        annee: "2023"
    },
    {
        id: "4",
        nom: "Draconis site web vitrine",
        description: "Site vitrine parlant du jeu Draconis",
        type: "dev",
        imgLeft: "/img/Artémis.png",
        imgRight: "/img/blue.jpg",
        imgUp: "/img/Hermès.png",
        imgGallery: ["/img/Artémis.png", "/img/blue.jpg", "/img/Hermès.png"],
        descriptionLongue: "APPERCU DU SITE VITRINE DÉDIÉ AU JEU DRACONIS, PRÉSENTANT L'UNIVERS, LES PERSONNAGES ET LES FONCTIONNALITÉS DU JEU. INCLUT DES CAPTURES D'ÉCRAN ET VIDEOS.",
        numero: "04",
        siteUrl: "https://draconis.netlify.app/",
        technologies: ["HTML, CSS", "JavaScript", "Responsive Design"],
        annee: "2023"
    },
    {
        id: "5",
        nom: "Affiche dieux de l'Olympe",
        description: "Collection d'affiches des dieux de l'Olympe",
        type: "graph",
        imgLeft: "/img/blue.jpg",
        imgRight: "/img/Artémis.png",
        imgUp: "/img/Hermès.png",
        imgGallery: ["/img/blue.jpg", "/img/Artémis.png", "/img/Hermès.png"],
        descriptionLongue: "APPLICATION MOBILE NATIVE POUR IOS ET ANDROID. INTERFACE INTUITIVE ET PERFORMANCES OPTIMISÉES POUR UNE EXPÉRIENCE UTILISATEUR EXCEPTIONNELLE SUR MOBILE.",
        numero: "05",
        technologies: ["Affinity", "Figma"],
        annee: "2025"
    },
    {
        id: "6",
        nom: "Motion Design CV",
        description: "Motion design présentant mon CV",
        type: "graph",
        imgLeft: "/img/Hermès.png",
        imgRight: "/img/blue.jpg",
        imgUp: "/img/Artémis.png",
        imgGallery: ["/img/Hermès.png", "/img/blue.jpg", "/img/Artémis.png"],
        descriptionLongue: "CRÉATION D'UN DASHBOARD ADMINISTRATEUR COMPLET AVEC ANALYTICS EN TEMPS RÉEL. GESTION DES UTILISATEURS, RAPPORTS DÉTAILLÉS ET INTERFACE MODERNE POUR LES ADMINISTRATEURS.",
        numero: "06",
        technologies: ["After Effects"],
        annee: "2024"
    },
    {
        id: "7",
        nom: "Diorama 3D",
        description: "Diorama 3D réalisé avec Blender",
        type: "graph",
        imgLeft: "/img/diorama.png",
        imgRight: "/img/diorama.png",
        imgUp: "/img/diorama.png",
        imgGallery: ["/img/Artémis.png", "/img/Hermès.png", "/img/blue.jpg"],
        descriptionLongue: "DIORAMA 3D CRÉÉ AVEC BLENDER.",
        numero: "07",
        technologies: ["Blender", "3D Modeling", "Rendering"],
        annee: "2024"
    },
     {
        id: "8",
        nom: "Cite vitrine de cocktail",
        description: "Site vitrine parlant du jeu Draconis",
        type: "dev",
        imgLeft: "/img/Artémis.png",
        imgRight: "/img/blue.jpg",
        imgUp: "/img/Hermès.png",
        imgGallery: ["/img/Artémis.png", "/img/blue.jpg", "/img/Hermès.png"],
        descriptionLongue: "APPERCU DU SITE VITRINE DÉDIÉ AU JEU DRACONIS, PRÉSENTANT L'UNIVERS, LES PERSONNAGES ET LES FONCTIONNALITÉS DU JEU. INCLUT DES CAPTURES D'ÉCRAN ET VIDEOS.",
        numero: "04",
        siteUrl: "https://draconis.netlify.app/",
        technologies: ["HTML, CSS", "JavaScript", "Responsive Design"],
        annee: "2025"
    },
]

export function getProjectById(id: string): ProjectList | undefined {
    return Projects.find(project => project.id === id);
}

export function getAllProjects(): ProjectList[] {
    return Projects;
}