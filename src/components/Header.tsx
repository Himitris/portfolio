import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, Globe } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { staggerContainer, navItemVariants } from './animations';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Utilisation du contexte de langue
    const { language, toggleLanguage, t } = useLanguage();

    const handleNavClick = (sectionId: string) => {
        scrollToSection(sectionId);
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 z-50 origin-left"
                style={{ scaleX }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <motion.div
                        className="flex-shrink-0 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src="/favicon.png" alt="Logo" className="h-8 w-8 mr-2" />
                        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">{t('portfolio')}</h1>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav
                        className="hidden md:flex space-x-8"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.a
                            variants={navItemVariants}
                            onClick={() => handleNavClick('about')}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer relative group"
                        >
                            {t('about')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                        <motion.a
                            variants={navItemVariants}
                            onClick={() => handleNavClick('projects')}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer relative group"
                        >
                            {t('projects')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                        <motion.a
                            variants={navItemVariants}
                            onClick={() => handleNavClick('contact')}
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer relative group"
                        >
                            {t('contact')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    </motion.nav>

                    {/* Social Links - Desktop */}
                    <motion.div
                        className="hidden md:flex items-center space-x-4"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* Bouton de changement de langue */}
                        <motion.button
                            className="text-gray-500 hover:text-gray-700 relative group flex items-center space-x-1"
                            variants={navItemVariants}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleLanguage}
                        >
                            <Globe size={20} />
                            <span className="text-sm">{language.toUpperCase()}</span>
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {language === 'fr' ? 'English' : 'Français'}
                            </span>
                        </motion.button>

                        <motion.a
                            href="https://github.com/Himitris"
                            className="text-gray-500 hover:text-gray-700 relative group"
                            variants={navItemVariants}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github size={20} />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">GitHub</span>
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/antoine-gautier-8aa492151/"
                            className="text-gray-500 hover:text-gray-700 relative group"
                            variants={navItemVariants}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin size={20} />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">LinkedIn</span>
                        </motion.a>
                        <motion.a
                            href="mailto:antoine.gautier83@gmail.com"
                            className="text-gray-500 hover:text-gray-700 relative group"
                            variants={navItemVariants}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={20} />
                            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Email</span>
                        </motion.a>
                    </motion.div>

                    {/* Mobile menu button */}
                    <motion.div
                        className="md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <motion.button
                            type="button"
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <motion.a
                                onClick={() => handleNavClick('about')}
                                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer rounded-md"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                {t('about')}
                            </motion.a>
                            <motion.a
                                onClick={() => handleNavClick('projects')}
                                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer rounded-md"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {t('projects')}
                            </motion.a>
                            <motion.a
                                onClick={() => handleNavClick('contact')}
                                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer rounded-md"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {t('contact')}
                            </motion.a>
                            {/* Bouton de changement de langue pour mobile */}
                            <motion.button
                                onClick={toggleLanguage}
                                className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer rounded-md"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Globe size={20} className="mr-2" />
                                <span>
                                    {language === 'fr' ? 'English' : 'Français'} ({language.toUpperCase()})
                                </span>
                            </motion.button>
                        </div>
                        <motion.div
                            className="flex flex-col items-center pb-4 border-t border-gray-200 pt-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <img src="/favicon.png" alt="Logo" className="h-8 w-8 mb-3" />
                        </motion.div>
                        <motion.div
                            className="flex justify-center space-x-6 pb-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.a
                                href="#"
                                className="text-gray-500 hover:text-gray-700"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-gray-500 hover:text-gray-700"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={20} />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-gray-500 hover:text-gray-700"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Mail size={20} />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;