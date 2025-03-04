import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Zap, Palette, Sparkles } from 'lucide-react';
import { AnimatedSection, projectCardVariants, staggerContainer, fadeIn, navItemVariants } from './animations';

// Project data
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        icon: <Code size={24} />
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects and skills with a modern, minimalist design.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        icon: <Palette size={24} />
    },
    {
        id: 3,
        title: "Task Management App",
        description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        tags: ["React", "Firebase", "Material UI"],
        icon: <Zap size={24} />
    },
    {
        id: 4,
        title: "Restaurant Booking System",
        description: "An online reservation system for restaurants with table management and customer notifications.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Twilio"],
        icon: <Sparkles size={24} />
    },
];

export const About: React.FC = () => {
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
                        About Me
                    </motion.h2>
                    <motion.p
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Passionate Web Developer
                    </motion.p>
                    <motion.p
                        className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        With expertise in modern web technologies and a keen eye for design, I create engaging digital experiences.
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
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
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
                            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
                            <p className="mt-4 text-lg text-gray-600">
                                With over 5 years of experience in web development, I've worked on a variety of projects from e-commerce platforms to complex web applications. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                I specialize in front-end development using React, Vue.js, and modern CSS frameworks, complemented by back-end skills in Node.js and database management.
                            </p>
                            <motion.div
                                className="mt-8"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                <h4 className="text-lg font-semibold text-gray-900">Skills</h4>
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
                        Portfolio
                    </motion.h2>
                    <motion.p
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Featured Projects
                    </motion.p>
                    <motion.p
                        className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        A selection of my recent work showcasing my skills and expertise.
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
                            className="bg-white overflow-hidden rounded-xl shadow-lg group"
                            variants={projectCardVariants}
                            whileHover="hover"
                            custom={index}
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
                                    <motion.a
                                        href="#"
                                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 relative overflow-hidden group"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>View Project</span>
                                        <ExternalLink size={16} className="ml-1" />
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                        />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
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