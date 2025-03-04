import React, { createContext, useState, useContext, ReactNode } from 'react';

// Définir les langues disponibles
export type Language = 'fr' | 'en';

// Définir toutes les traductions en un seul objet
export const translations = {
  fr: {
    // Header
    portfolio: "Antoine Gautier",
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
    
    // Hero
    creativeDeveloper: "Développeur Créatif",
    craftingDigitalExperiences: "Création d'Expériences Digitales",
    heroDescription: "Je conçois et développe des sites web et applications modernes qui offrent des expériences utilisateur exceptionnelles.",
    viewProjects: "Voir les Projets",
    contactMe: "Me Contacter",
    
    // About
    aboutMe: "À Propos de Moi",
    passionateWebDeveloper: "Développeur Web Passionné",
    aboutDescription: "Avec une expertise des technologies web modernes et un œil attentif pour le design, je crée des expériences digitales engageantes.",
    myJourney: "Mon Parcours",
    journeyDescription1: "Avec plus de 5 ans d'expérience en développement web, j'ai travaillé sur une variété de projets, des plateformes e-commerce aux applications web complexes. Mon approche combine expertise technique et résolution créative de problèmes pour livrer des solutions qui dépassent les attentes.",
    journeyDescription2: "Je me spécialise dans le développement front-end utilisant React, Vue.js et les frameworks CSS modernes, complété par des compétences back-end en Node.js et gestion de bases de données.",
    skills: "Compétences",
    
    // Projects
    featuredProjects: "Projets en Vedette",
    projectsDescription: "Une sélection de mes travaux récents mettant en avant mes compétences et mon expertise.",
    viewProject: "Voir le Projet",
    
    // Project titles and descriptions
    ecommerceTitle: "Plateforme E-commerce",
    ecommerceDesc: "Un site e-commerce entièrement responsive avec filtrage de produits, fonctionnalités de panier et paiement sécurisé.",
    portfolioTitle: "Site Portfolio",
    portfolioDesc: "Un site portfolio personnel présentant projets et compétences avec un design moderne et minimaliste.",
    taskTitle: "Application de Gestion de Tâches",
    taskDesc: "Une application de productivité pour gérer les tâches, les projets et les échéances avec des fonctionnalités de collaboration d'équipe.",
    restaurantTitle: "Système de Réservation pour Restaurant",
    restaurantDesc: "Un système de réservation en ligne pour restaurants avec gestion des tables et notifications clients.",
    
    // Contact
    getInTouch: "Restons en Contact",
    contactDescription: "Intéressé par une collaboration ? N'hésitez pas à me contacter.",
    name: "Nom",
    email: "Email",
    message: "Message",
    yourName: "Votre nom",
    yourEmail: "votre.email@exemple.com",
    yourMessage: "Votre message",
    sendMessage: "Envoyer le Message",
    
    // Footer
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    allRightsReserved: "Tous droits réservés",
    
    // Project details modal
    challenge: "Le Défi",
    solution: "La Solution",
    keyFeatures: "Fonctionnalités Clés",
    gallery: "Galerie",
    liveDemo: "Démo en ligne",
    viewCode: "Voir le code",
    viewDetails: "Voir les détails",
    closeModal: "Fermer"
  },
  
  en: {
    // Header
    portfolio: "Antoine Gautier",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    
    // Hero
    creativeDeveloper: "Creative Developer",
    craftingDigitalExperiences: "Crafting Digital Experiences",
    heroDescription: "I design and build modern websites and applications that deliver exceptional user experiences.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    
    // About
    aboutMe: "About Me",
    passionateWebDeveloper: "Passionate Web Developer",
    aboutDescription: "With expertise in modern web technologies and a keen eye for design, I create engaging digital experiences.",
    myJourney: "My Journey",
    journeyDescription1: "With over 5 years of experience in web development, I've worked on a variety of projects from e-commerce platforms to complex web applications. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.",
    journeyDescription2: "I specialize in front-end development using React, Vue.js, and modern CSS frameworks, complemented by back-end skills in Node.js and database management.",
    skills: "Skills",
    
    // Projects
    featuredProjects: "Featured Projects",
    projectsDescription: "A selection of my recent work showcasing my skills and expertise.",
    viewProject: "View Project",
    
    // Project titles and descriptions
    ecommerceTitle: "E-commerce Platform",
    ecommerceDesc: "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout.",
    portfolioTitle: "Portfolio Website",
    portfolioDesc: "A personal portfolio website showcasing projects and skills with a modern, minimalist design.",
    taskTitle: "Task Management App",
    taskDesc: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
    restaurantTitle: "Restaurant Booking System",
    restaurantDesc: "An online reservation system for restaurants with table management and customer notifications.",
    
    // Contact
    getInTouch: "Get In Touch",
    contactDescription: "Interested in working together? Feel free to reach out.",
    name: "Name",
    email: "Email",
    message: "Message",
    yourName: "Your name",
    yourEmail: "your.email@example.com",
    yourMessage: "Your message",
    sendMessage: "Send Message",
    
    // Footer
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved",
    
    // Project details modal
    challenge: "The Challenge",
    solution: "The Solution",
    keyFeatures: "Key Features",
    gallery: "Gallery",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    viewDetails: "View Details",
    closeModal: "Close"
  }
};

// Type pour le contexte de langue
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.fr | string) => string;
  toggleLanguage: () => void;
}

// Créer le contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Créer le provider
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr'); // Français par défaut

  // Fonction pour obtenir une traduction
  const t = (key: keyof typeof translations.fr | string): string => {
    // Si la clé n'existe pas dans les traductions, retourne la clé elle-même
    return translations[language][key as keyof typeof translations.fr] || key;
  };
  
  // Fonction pour basculer entre les langues
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};