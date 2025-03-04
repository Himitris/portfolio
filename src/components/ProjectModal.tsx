import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  icon: React.ReactNode;
  challenge?: string;
  solution?: string;
  features?: string[];
  demoLink?: string;
  githubLink?: string;
  images?: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

// Composant modal utilisant un portail React pour se rendre à la racine du DOM
const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useLanguage();
  
  // Créer un élément div pour le portail du modal si nécessaire
  useEffect(() => {
    // S'assurer que l'élément modal-root existe
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }
    
    return () => {
      // Optionnel: nettoyer le modal-root s'il est vide
      if (modalRoot && !modalRoot.hasChildNodes()) {
        document.body.removeChild(modalRoot);
      }
    };
  }, []);
  
  // Fermer le modal avec la touche ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // Désactiver le défilement du body quand le modal est ouvert
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Si pas de projet sélectionné ou modal fermé, ne rien afficher
  if (!project || !isOpen) return null;
  
  // Fonction pour empêcher la propagation du clic
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Utiliser createPortal pour rendre le modal à la racine du DOM
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay avec z-index très élevé */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl relative flex flex-col"
              style={{ maxHeight: '90vh' }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={handleModalContentClick}
            >
              {/* Bouton de fermeture - fixé en haut à droite */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-gray-900 z-20 hover:bg-gray-100 cursor-pointer"
                onClick={onClose}
                aria-label={t('closeModal')}
              >
                <X size={24} />
              </button>
              
              {/* Zone de titre et d'image */}
              <div className="flex-shrink-0 relative h-64 sm:h-80 w-full overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contenu défilant */}
              <div className="flex-grow overflow-y-auto custom-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                <div className="p-6">
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700">{project.fullDescription || project.description}</p>
                    
                    {project.challenge && (
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-900">{t('challenge')}</h3>
                        <p className="mt-2 text-gray-700">{project.challenge}</p>
                      </div>
                    )}
                    
                    {project.solution && (
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-900">{t('solution')}</h3>
                        <p className="mt-2 text-gray-700">{project.solution}</p>
                      </div>
                    )}
                    
                    {project.features && project.features.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-900">{t('keyFeatures')}</h3>
                        <ul className="mt-2 space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-100 text-indigo-600 mr-2 flex-shrink-0">
                                {index + 1}
                              </span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Gallery images */}
                    {project.images && project.images.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('gallery')}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {project.images.map((image, index) => (
                            <motion.div
                              key={index}
                              className="rounded-lg overflow-hidden shadow-md"
                              whileHover={{ scale: 1.02 }}
                            >
                              <img
                                src={image}
                                alt={`${project.title} screenshot ${index + 1}`}
                                className="w-full h-48 object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Liens */}
                    <div className="mt-8 flex flex-wrap gap-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          {t('liveDemo')}
                        </a>
                      )}
                      
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <Github size={16} className="mr-2" />
                          {t('viewCode')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Bouton de fermeture en bas */}
                <div className="flex justify-center p-6 pt-2 border-t border-gray-100">
                  <button
                    onClick={onClose}
                    className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
                  >
                    {t('closeModal')}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root') || document.body
  );
};

export default ProjectModal;