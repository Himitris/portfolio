import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Sparkles, Code, Zap, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
};

const heroTextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Animated Section component
const AnimatedSection = ({ children, id, className }: { children: React.ReactNode, id?: string, className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Animated text component
const AnimatedCharacters = ({ text, className }: { text: string, className?: string }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.03
      }
    }
  };
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Parallax effect component
const ParallaxImage = ({ src, alt, speed = 0.5 }: { src: string, alt: string, speed?: number }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  
  return (
    <motion.div className="absolute inset-0 overflow-hidden">
      <motion.img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y }}
      />
    </motion.div>
  );
};

// Magnetic button effect
const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX / 5);
    y.set(distanceY / 5);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.button
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: mouseXSpring,
        y: mouseYSpring,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// Cursor blob effect
const CursorBlob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <motion.div
      className="fixed top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl pointer-events-none mix-blend-screen z-50"
      animate={{
        x: position.x - 80,
        y: position.y - 80,
        opacity: isVisible ? 1 : 0
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5
      }}
    />
  );
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Scroll to section smoothly
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Cursor blob effect */}
      <CursorBlob />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Portfolio</h1>
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
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a 
                variants={navItemVariants}
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
              <motion.a 
                variants={navItemVariants}
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium cursor-pointer relative group"
              >
                Contact
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
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-gray-700 relative group"
                variants={navItemVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">GitHub</span>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-gray-700 relative group"
                variants={navItemVariants}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">LinkedIn</span>
              </motion.a>
              <motion.a 
                href="#" 
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
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer rounded-md"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  About
                </motion.a>
                <motion.a 
                  onClick={() => scrollToSection('projects')}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer rounded-md"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Projects
                </motion.a>
                <motion.a 
                  onClick={() => scrollToSection('contact')}
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer rounded-md"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Contact
                </motion.a>
              </div>
              <motion.div 
                className="flex justify-center space-x-6 pb-4 border-t border-gray-200 pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
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

      <main>
        {/* Hero Section */}
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
                  text="Creative Developer" 
                  className="inline-flex text-white justify-center"
                />
              </motion.div>
              <motion.div 
                className="block text-indigo-200 text-3xl sm:text-4xl font-bold mt-2"
                variants={heroTextVariants}
              >
                <AnimatedCharacters 
                  text="Crafting Digital Experiences" 
                  className="inline-flex text-indigo-200 justify-center"
                />
              </motion.div>
              <motion.p 
                className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100"
                variants={heroTextVariants}
              >
                I design and build modern websites and applications that deliver exceptional user experiences.
              </motion.p>
              <motion.div 
                className="mt-10 flex justify-center"
                variants={fadeIn}
              >
                <MagneticButton className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10 cursor-pointer">
                  <motion.span
                    onClick={() => scrollToSection('projects')}
                    whileHover={{ scale: 1.05 }}
                  >
                    View Projects
                  </motion.span>
                </MagneticButton>
                <MagneticButton className="ml-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer relative overflow-hidden group">
                  <motion.span
                    onClick={() => scrollToSection('contact')}
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10"
                  >
                    Contact Me
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

        {/* About Section */}
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

        {/* Projects Section */}
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

        {/* Contact Section */}
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
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-100 rounded-full mix- blend-multiply filter blur-3xl opacity-30"
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
      </main>

      {/* Footer */}
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
    </div>
  );
}

export default App;