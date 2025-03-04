import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AnimatedSection, fadeIn } from './animations';

export const Contact: React.FC = () => {
    return (
        <AnimatedSection id="contact" className="py-16 bg-white relative overflow-hidden">
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
                        Contact
                    </motion.h2>
                    <motion.p
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Get In Touch
                    </motion.p>
                    <motion.p
                        className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Interested in working together? Feel free to reach out.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="mt-12 max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 z-0"></div>
                    <form className="grid grid-cols-1 gap-y-6 relative z-10">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <div className="mt-1 relative">
                                <motion.input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
                                    placeholder="Your name"
                                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)" }}
                                />
                                <motion.span
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1 relative">
                                <motion.input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
                                    placeholder="your.email@example.com"
                                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)" }}
                                />
                                <motion.span
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.7 }}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <div className="mt-1 relative">
                                <motion.textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="py-3 px-4 block w-full shadow-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white/70"
                                    placeholder="Your message"
                                    whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px rgba(99, 102, 241, 0.2)" }}
                                />
                                <motion.span
                                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.9 }}
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <motion.button
                                type="submit"
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="relative z-10">Send Message</span>
                                <motion.span
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600"
                                    initial={{ x: "100%" }}
                                    whileHover={{ x: 0 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </motion.button>
                        </motion.div>
                    </form>
                </motion.div>
            </div>

            {/* Background decoration */}
            <motion.div
                className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
            <motion.div
                className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
        </AnimatedSection>
    );
};

export const Footer: React.FC = () => {
    return (
        <motion.footer
            className="bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-white text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Portfolio</h2>
                    </motion.div>
                    <motion.div
                        className="mt-8 md:mt-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex space-x-6">
                            <motion.a
                                href="#"
                                className="text-gray-400 hover:text-white relative group"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Github size={20} />
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-gray-400 hover:text-white relative group"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Linkedin size={20} />
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                />
                            </motion.a>
                            <motion.a
                                href="#"
                                className="text-gray-400 hover:text-white relative group"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Mail size={20} />
                                <motion.span
                                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="flex space-x-6 md:order-2">
                        <motion.a
                            href="#"
                            className="text-gray-400 hover:text-gray-300 relative group"
                            whileHover={{ x: 2 }}
                        >
                            Privacy Policy
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-gray-400 hover:text-gray-300 relative group"
                            whileHover={{ x: 2 }}
                        >
                            Terms of Service
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            />
                        </motion.a>
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                </motion.div>
            </div>

            {/* Background decoration */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10"
            >
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{
                            width: `${100 + Math.random() * 200}px`,
                            height: `${100 + Math.random() * 200}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </motion.div>
        </motion.footer>
    );
};