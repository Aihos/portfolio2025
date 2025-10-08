

export interface ProjectList{
    id: string,
    nom: string,
    description: string,
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
        id: "artemis-project",
        nom: "Projet Artémis",
        description: "Application web moderne avec React et Next.js pour la gestion de contenu",
        imgLeft: "/img/Artémis.png",
        imgRight: "/img/blue.jpg", 
        imgUp: "/img/Hermès.png",
        imgGallery: ["/img/Artémis.png", "/img/blue.jpg", "/img/Hermès.png"],
        descriptionLongue: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. AT MASSA AT MASSA VITAE ODIO EU SCELERISQUE TURPIS. AT MATTIS EUISMOD ERAT PORTA EGET ELEIFEND VITAE NISI TELLUS. MASSA PELLENTESQUE CONSECTETUR SUSPENDISSE NATOQUE. ADIPISCING IMPERDIET GRAVIDA LOREM IN NON ALIQUAM SUSCIPIT.",
        numero: "01",
        siteUrl: "https://artemis-project.com",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        annee: "2024"
    },
    {
        id: "hermes-platform",
        nom: "Plateforme Hermès",
        description: "Solution e-commerce complète avec système de paiement intégré",
        imgLeft: "/img/Hermès.png",
        imgRight: "/img/Artémis.png",
        imgUp: "/img/blue.jpg",
        imgGallery: ["/img/Hermès.png", "/img/Artémis.png", "/img/blue.jpg"],
        descriptionLongue: "PLATEFORME INNOVATIVE POUR LE COMMERCE EN LIGNE. INTÉGRATION COMPLÈTE DES SYSTÈMES DE PAIEMENT ET GESTION AVANCÉE DES COMMANDES. INTERFACE UTILISATEUR MODERNE ET RESPONSIVE POUR UNE EXPÉRIENCE OPTIMALE.",
        numero: "02",
        siteUrl: "https://hermes-platform.com",
        technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
        annee: "2024"
    },
    {
        id: "blue-design",
        nom: "Blue Design System",
        description: "Système de design et composants UI réutilisables",
        imgLeft: "/img/blue.jpg",
        imgRight: "/img/Hermès.png",
        imgUp: "/img/Artémis.png",
        imgGallery: ["/img/blue.jpg", "/img/Hermès.png", "/img/Artémis.png"],
        descriptionLongue: "CRÉATION D'UN SYSTÈME DE DESIGN COMPLET AVEC BIBLIOTHÈQUE DE COMPOSANTS. DOCUMENTATION INTERACTIVE ET GUIDELINES POUR ASSURER LA COHÉRENCE VISUELLE ACROSS MULTIPLE PROJECTS.",
        numero: "03",
        technologies: ["Storybook", "React", "Figma", "SCSS"],
        annee: "2023"
    },
    {
        id: "portfolio-moderne",
        nom: "Portfolio Moderne",
        description: "Site portfolio avec animations avancées GSAP",
        imgLeft: "/img/Artémis.png",
        imgRight: "/img/blue.jpg",
        imgUp: "/img/Hermès.png",
        imgGallery: ["/img/Artémis.png", "/img/blue.jpg", "/img/Hermès.png"],
        descriptionLongue: "DÉVELOPPEMENT D'UN PORTFOLIO INTERACTIF AVEC ANIMATIONS SOPHISTIQUÉES. UTILISATION DE GSAP POUR DES TRANSITIONS FLUIDES ET UNE EXPÉRIENCE UTILISATEUR IMMERSIVE.",
        numero: "04",
        siteUrl: "https://portfolio-moderne.com",
        technologies: ["Next.js", "GSAP", "Three.js", "Tailwind CSS"],
        annee: "2023"
    },
    {
        id: "app-mobile",
        nom: "Application Mobile",
        description: "App mobile cross-platform avec React Native",
        imgLeft: "/img/blue.jpg",
        imgRight: "/img/Artémis.png",
        imgUp: "/img/Hermès.png",
        imgGallery: ["/img/blue.jpg", "/img/Artémis.png", "/img/Hermès.png"],
        descriptionLongue: "APPLICATION MOBILE NATIVE POUR IOS ET ANDROID. INTERFACE INTUITIVE ET PERFORMANCES OPTIMISÉES POUR UNE EXPÉRIENCE UTILISATEUR EXCEPTIONNELLE SUR MOBILE.",
        numero: "05",
        technologies: ["React Native", "Expo", "Firebase", "Redux"],
        annee: "2023"
    },
    {
        id: "dashboard-admin",
        nom: "Dashboard Admin",
        description: "Interface d'administration avec tableaux de bord analytics",
        imgLeft: "/img/Hermès.png",
        imgRight: "/img/blue.jpg",
        imgUp: "/img/Artémis.png",
        imgGallery: ["/img/Hermès.png", "/img/blue.jpg", "/img/Artémis.png"],
        descriptionLongue: "CRÉATION D'UN DASHBOARD ADMINISTRATEUR COMPLET AVEC ANALYTICS EN TEMPS RÉEL. GESTION DES UTILISATEURS, RAPPORTS DÉTAILLÉS ET INTERFACE MODERNE POUR LES ADMINISTRATEURS.",
        numero: "06",
        technologies: ["React", "Chart.js", "Node.js", "PostgreSQL"],
        annee: "2022"
    },
    {
        id: "site-vitrine",
        nom: "Site Vitrine",
        description: "Site corporate responsive avec CMS headless",
        imgLeft: "/img/Artémis.png",
        imgRight: "/img/Hermès.png",
        imgUp: "/img/blue.jpg",
        imgGallery: ["/img/Artémis.png", "/img/Hermès.png", "/img/blue.jpg"],
        descriptionLongue: "DÉVELOPPEMENT D'UN SITE VITRINE CORPORATE AVEC CMS HEADLESS. OPTIMISATION SEO AVANCÉE ET PERFORMANCES WEB POUR UN RÉFÉRENCEMENT OPTIMAL ET UNE EXPÉRIENCE UTILISATEUR PARFAITE.",
        numero: "07",
        technologies: ["Gatsby", "Strapi", "GraphQL", "Netlify"],
        annee: "2022"
    }
]

export function getProjectById(id: string): ProjectList | undefined {
    return Projects.find(project => project.id === id);
}

export function getAllProjects(): ProjectList[] {
    return Projects;
}