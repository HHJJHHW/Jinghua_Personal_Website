import { ArrowUpRight, BarChart2, ChevronLeft, ChevronRight, Github, Info, Maximize2, X, ZoomIn } from 'lucide-react';
import React, { useState, useEffect, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const CATEGORIES = [
  "All",
  "Risk Analytics",
  "Finance",
  "Machine Learning",
  "Pricing",
  "Consumer Behavior"
];

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter(p => p.tags.includes(activeCategory));
  }, [activeCategory]);

  const openModal = (p: Project) => {
    setSelectedProject(p);
    setCurrentImgIdx(0);
    setIsFullScreen(false);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsFullScreen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isFullScreen) setIsFullScreen(false);
        else if (selectedProject) closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedProject, isFullScreen]);

  const nextImg = () => {
    if (!selectedProject) return;
    setCurrentImgIdx((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImg = () => {
    if (!selectedProject) return;
    setCurrentImgIdx((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 md:mb-16 gap-8">
        <div className="shrink-0">
          <span className="text-duke-blue dark:text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 block">Selected Works</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom dark:text-white">Data & AI Portfolio</h2>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-nowrap overflow-x-auto lg:overflow-visible no-scrollbar gap-2 pb-2 lg:pb-0 items-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm shrink-0 ${
                activeCategory === cat 
                  ? 'bg-[#2563eb] text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-[#f1f5f9] dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredProjects.map((p) => (
          <div 
            key={p.id} 
            onClick={() => openModal(p)}
            className="group cursor-pointer flex flex-col gap-4 bg-white dark:bg-slate-900 p-4 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-500 h-full"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
              <img 
                src={p.coverImage} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl opacity-0 lg:group-hover:opacity-100 transition-all shadow-sm">
                <ArrowUpRight size={16} className="text-duke-blue dark:text-blue-400" />
              </div>
            </div>
            <div className="flex flex-col gap-1 px-1 flex-1">
              <h3 className="font-bold text-base md:text-lg tracking-tight group-hover:text-duke-blue dark:group-hover:text-blue-400 dark:text-slate-100 transition-colors line-clamp-2 h-12 md:h-14 leading-tight">{p.title}</h3>
              <div className="flex gap-2 mt-auto">
                <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500">
                  {p.tags.find(t => CATEGORIES.includes(t)) || p.tags[0]}
                </span>
              </div>
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <p className="text-slate-400 dark:text-slate-500 font-medium italic">No projects found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Main Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[200] bg-white dark:bg-slate-950 flex flex-col overflow-y-auto"
          onClick={closeModal}
        >
          <div className="sticky top-0 z-[210] flex justify-between items-center p-4 md:p-6 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-duke-blue/10 dark:bg-blue-400/10 flex items-center justify-center text-duke-blue dark:text-blue-400">
                <Info size={20} />
              </div>
              <h3 className="font-bold text-sm md:text-xl tracking-tight truncate max-w-[200px] md:max-w-md dark:text-slate-100">{selectedProject.title}</h3>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); closeModal(); }} 
              className="p-2 md:p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-full transition-all flex items-center justify-center group shadow-sm"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
          
          <div 
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-[1600px] mx-auto p-4 md:p-10 lg:p-12 flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lg:w-[60%] w-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-duke-blue/10 dark:bg-blue-400/10 p-1.5 rounded-lg">
                    <BarChart2 size={16} className="text-duke-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 block leading-none">Visualization</span>
                    <span className="text-[9px] font-medium text-duke-blue/60 dark:text-blue-400/60">{currentImgIdx + 1} of {selectedProject.images.length} views</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsFullScreen(true)}
                  className="group flex items-center gap-2 bg-duke-blue dark:bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all hover:bg-blue-700 shadow-md"
                >
                  <Maximize2 size={12} />
                  <span>Inspect</span>
                </button>
              </div>
              
              <div 
                className="relative aspect-video lg:aspect-auto lg:h-[60vh] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center shadow-inner group/img cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
              >
                <img 
                  src={selectedProject.images[currentImgIdx]} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain p-2 md:p-6"
                />
                {selectedProject.images.length > 1 && (
                  <div className="absolute inset-x-4 bottom-4 flex justify-between items-center bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-2 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-800 z-20">
                    <div className="flex gap-2">
                      <button onClick={prevImg} className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-duke-blue dark:hover:bg-blue-600 hover:text-white transition-all text-slate-600 dark:text-slate-300"><ChevronLeft size={16} /></button>
                      <button onClick={nextImg} className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-duke-blue dark:hover:bg-blue-600 hover:text-white transition-all text-slate-600 dark:text-slate-300"><ChevronRight size={16} /></button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-[40%] w-full flex flex-col">
              <div className="bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800 p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] h-full flex flex-col">
                <span className="text-duke-blue dark:text-blue-400 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] block">Analytical Findings</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter-custom mb-6 lg:mb-10 leading-tight text-slate-900 dark:text-slate-100">{selectedProject.title}</h2>
                <div className="space-y-6 md:space-y-8 mb-10 flex-1 overflow-y-auto no-scrollbar">
                  {selectedProject.description.map((desc, i) => (
                    <div key={i} className="flex gap-4 items-start group/item">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-duke-blue dark:text-blue-400 text-[9px] md:text-[11px] font-bold shrink-0 mt-0.5 border border-slate-200 dark:border-slate-700 shadow-sm group-hover/item:bg-duke-blue dark:group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        {i+1}
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-light">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(t => (
                      <span key={t} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest bg-white dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm">{t}</span>
                    ))}
                  </div>
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 bg-slate-900 dark:bg-slate-100 dark:text-slate-900 text-white w-full py-4 rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-duke-blue dark:hover:bg-blue-500 dark:hover:text-white transition-all shadow-xl">
                      <Github size={14} />
                      <span>Technical Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isFullScreen && selectedProject && (
        <div className="fixed inset-0 z-[300] bg-black backdrop-blur-3xl flex items-center justify-center" onClick={() => setIsFullScreen(false)}>
          <img src={selectedProject.images[currentImgIdx]} className="max-w-[90%] max-h-[90%] object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute top-8 right-8 text-white p-4" onClick={() => setIsFullScreen(false)}><X size={32} /></button>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;