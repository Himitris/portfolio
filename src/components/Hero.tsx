import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCharacters, MagneticButton, staggerContainer, heroTextVariants, fadeIn } from './animations';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
    scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    const { t } = useLanguage();
    
    return (
        <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 py-20 sm:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-4"
                        variants={heroTextVariants}
                    >
                        <AnimatedCharacters
                            text={t('creativeDeveloper')}
                            className="inline-flex text-white justify-center"
                        />
                    </motion.div>
                    <motion.div
                        className="block text-indigo-200 text-3xl sm:text-4xl font-bold mt-2"
                        variants={heroTextVariants}
                    >
                        <AnimatedCharacters
                            text={t('craftingDigitalExperiences')}
                            className="inline-flex text-indigo-200 justify-center"
                        />
                    </motion.div>
                    <motion.p
                        className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100"
                        variants={heroTextVariants}
                    >
                        {t('heroDescription')}
                    </motion.p>
                    <motion.div
                        className="mt-10 flex justify-center"
                        variants={fadeIn}
                    >
                        <MagneticButton
                            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 cursor-pointer"
                            onClick={() => scrollToSection('projects')}
                        >
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                            >
                                {t('viewProjects')}
                            </motion.span>
                        </MagneticButton>
                        <MagneticButton
                            className="ml-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer relative overflow-hidden group"
                            onClick={() => scrollToSection('contact')}
                        >
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className="relative z-10"
                            >
                                {t('contactMe')}
                            </motion.span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80')] opacity-10 bg-cover bg-center"></div>
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;