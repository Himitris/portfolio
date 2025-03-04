import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Zap, Palette, Sparkles } from 'lucide-react';
import { AnimatedSection, projectCardVariants, staggerContainer, fadeIn, navItemVariants } from './animations';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal, { ProjectDetail } from './ProjectModal';

// Données détaillées des projets
const getProjects = (t: any): ProjectDetail[] => [
    {
        id: 1,
        title: t('ecommerceTitle'),
        description: t('ecommerceDesc'),
        fullDescription: "Cette plateforme e-commerce complète offre une expérience d'achat fluide avec une interface utilisateur moderne et responsive. Elle intègre des fonctionnalités avancées de filtrage de produits, un panier d'achat dynamique et un processus de paiement sécurisé.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        icon: <Code size={24} />,
        challenge: "Créer une plateforme e-commerce complète qui offre une expérience utilisateur fluide, des performances optimales et une sécurité des paiements, tout en permettant une gestion facile des produits pour les administrateurs.",
        solution: "J'ai développé une application React pour le frontend avec Redux pour la gestion d'état, associée à une API Node.js/Express pour le backend. MongoDB a été choisi pour sa flexibilité dans la gestion des données de produits, tandis que Stripe a été intégré pour les paiements sécurisés.",
        features: [
            "Filtrage avancé des produits par catégorie, prix et attributs",
            "Système de panier persistant avec localStorage",
            "Authentification JWT avec gestion des rôles",
            "Paiements sécurisés via Stripe",
            "Tableau de bord administrateur pour la gestion des produits et des commandes",
            "Conception responsive pour une expérience optimale sur tous les appareils"
        ],
        demoLink: "https://example.com/ecommerce-demo",
        githubLink: "https://github.com/username/ecommerce-project",
        images: [
            "https://images.unsplash.com/photo-1571431253908-43fdad7b3077?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        ]
    },
    {
        id: 2,
        title: t('portfolioTitle'),
        description: t('portfolioDesc'),
        fullDescription: "Ce portfolio personnel présente mes projets et compétences avec un design moderne et minimaliste. Il met en valeur mon travail tout en offrant une navigation intuitive et une expérience utilisateur agréable.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        icon: <Palette size={24} />,
        challenge: "Concevoir un portfolio qui me démarque tout en présentant mes projets et compétences de manière claire et attrayante.",
        solution: "J'ai développé un site React avec Tailwind CSS pour un design épuré et Framer Motion pour des animations fluides. L'interface est conçue pour mettre en valeur mes projets tout en étant agréable à parcourir.",
        features: [
            "Design responsive et moderne",
            "Animations subtiles pour améliorer l'expérience utilisateur",
            "Sections de projets détaillées avec modals",
            "Formulaire de contact fonctionnel",
            "Support multilingue (français et anglais)"
        ],
        demoLink: "https://portfolio-demo.example.com",
        githubLink: "https://github.com/username/portfolio",
        images: [
            "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80"
        ]
    },
    {
        id: 3,
        title: t('taskTitle'),
        description: t('taskDesc'),
        fullDescription: "Cette application de gestion de tâches améliore la productivité en permettant aux utilisateurs de gérer leurs projets, tâches et échéances. Elle intègre des fonctionnalités de collaboration d'équipe pour faciliter le travail en groupe.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        tags: ["React", "Firebase", "Material UI"],
        icon: <Zap size={24} />,
        challenge: "Développer une application de gestion de tâches intuitive qui permet aux équipes de collaborer efficacement et de suivre la progression des projets en temps réel.",
        solution: "J'ai créé une application React avec Firebase pour la base de données en temps réel et l'authentification. Material UI a été utilisé pour un design cohérent et une expérience utilisateur fluide.",
        features: [
            "Création et organisation de tâches avec système de drag-and-drop",
            "Tableaux de bord personnalisables avec statistiques",
            "Notifications et rappels d'échéances",
            "Commentaires et pièces jointes sur les tâches",
            "Partage de projets et attribution de tâches",
            "Mode hors ligne avec synchronisation"
        ],
        demoLink: "https://taskmanager.example.com",
        githubLink: "https://github.com/username/task-manager",
        images: [
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        ]
    },
    {
        id: 4,
        title: t('restaurantTitle'),
        description: t('restaurantDesc'),
        fullDescription: "Ce système de réservation en ligne pour restaurants permet la gestion des tables et l'envoi de notifications aux clients. Il aide les restaurants à optimiser leur capacité et à améliorer l'expérience client.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Twilio"],
        icon: <Sparkles size={24} />,
        challenge: "Créer un système de réservation fiable qui permette aux restaurants de gérer efficacement leurs tables tout en offrant une expérience de réservation simple pour les clients.",
        solution: "J'ai développé une application Next.js avec une architecture serveur pour les performances, Prisma comme ORM avec PostgreSQL pour la gestion des données, et Twilio pour les notifications par SMS aux clients.",
        features: [
            "Interface de réservation intuitive avec sélection visuelle des tables",
            "Confirmation automatique par SMS et email",
            "Tableau de bord administrateur pour la gestion des réservations",
            "Personnalisation des tables et des plans de salle",
            "Système de liste d'attente pour les périodes d'affluence",
            "Rapports et analyses sur les tendances de réservation"
        ],
        demoLink: "https://reservation-demo.example.com",
        githubLink: "https://github.com/username/restaurant-booking",
        images: [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        ]
    },
];

export const About: React.FC = () => {
    const { t } = useLanguage();

    return (
        <AnimatedSection id="about" className="py-16 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="lg:text-center"
                    variants={fadeIn}
                >
                    <motion.h2
                        className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {t('aboutMe')}
                    </motion.h2>
                    <motion.p
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {t('passionateWebDeveloper')}
                    </motion.p>
                    <motion.p
                        className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {t('aboutDescription')}
                    </motion.p>
                </motion.div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <motion.div
                            className="relative rounded-lg overflow-hidden shadow-xl"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 z-10 mix-blend-overlay"></div>
                            <img
                                className="h-full w-full object-cover"
                                src="/antoine.jpg"
                                alt="Developer working"
                            />
                        </motion.div>
                        <motion.div
                            className="flex flex-col justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900">{t('myJourney')}</h3>
                            <p className="mt-4 text-lg text-gray-600">
                                {t('journeyDescription1')}
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                {t('journeyDescription2')}
                            </p>
                            <motion.div
                                className="mt-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <h4 className="text-lg font-semibold text-gray-900">{t('skills')}</h4>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {["React", "TypeScript", "Node.js", "Tailwind CSS", "Next.js", "MongoDB", "PostgreSQL", "UI/UX Design"].map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm relative group overflow-hidden"
                                            variants={navItemVariants}
                                            custom={index}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <span className="relative z-10">{skill}</span>
                                            <motion.span
                                                className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200"
                                                initial={{ x: "-100%" }}
                                                whileHover={{ x: 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-100 rounded-full opacity-50"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-100 rounded-full opacity-50"></div>
        </AnimatedSection>
    );
};

export const Projects: React.FC = () => {
    const { t } = useLanguage();
    const projects = getProjects(t);

    // État pour le modal
    const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Ouvrir le modal avec le projet sélectionné
    const openProjectDetails = (project: ProjectDetail) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    // Fermer le modal
    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300); // Attendre la fin de l'animation
    };

    return (
        <AnimatedSection id="projects" className="py-16 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="lg:text-center mb-12"
                    variants={fadeIn}
                >
                    <motion.h2
                        className="text-base text-indigo-600 font-semibold tracking-wide uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {t('portfolio')}
                    </motion.h2>
                    <motion.p
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {t('featuredProjects')}
                    </motion.p>
                    <motion.p
                        className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {t('projectsDescription')}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="bg-white overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                            variants={projectCardVariants}
                            whileHover="hover"
                            custom={index}
                            onClick={() => openProjectDetails(project)}
                        >
                            <div className="h-48 w-full overflow-hidden relative">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                                />
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    whileHover={{ rotate: 15 }}
                                >
                                    {project.icon}
                                </motion.div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <motion.span
                                            key={tag}
                                            className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs"
                                            whileHover={{ scale: 1.1, backgroundColor: "#e0e7ff" }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="mt-6">
                                    <motion.span
                                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 relative overflow-hidden group"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>{t('viewDetails')}</span>
                                        <ExternalLink size={16} className="ml-1" />
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                        />
                                    </motion.span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Modal pour les détails du projet */}
                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={closeModal}
                />
            </div>

            {/* Background decoration */}
            <motion.div
                className="absolute top-1/3 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{
                    x: [50, 0, 50],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute bottom-1/3 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{
                    x: [-50, 0, -50],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
        </AnimatedSection>
    );
};