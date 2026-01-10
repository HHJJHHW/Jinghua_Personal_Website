import { ArrowUpRight, BarChart2, ChevronLeft, ChevronRight, Github, Info, Maximize2, X, ZoomIn } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openModal = (p: Project) => {
    setSelectedProject(p);
    setCurrentImgIdx(0);
    setIsFullScreen(false);
    // Standard approach for locking body scroll
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsFullScreen(false);
    document.body.style.overflow = 'auto';
  };

  // Close modal on escape key
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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6 md:gap-8">
        <div>
          <span className="text-duke-blue text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 block">Selected Works</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom">Data & AI Portfolio</h2>
        </div>
        <p className="text-slate-500 max-w-sm text-xs md:text-sm leading-relaxed font-light hidden lg:block">
          Translating complex datasets into actionable business intelligence through advanced machine learning architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
        {PROJECTS.map((p) => (
          <div 
            key={p.id} 
            onClick={() => openModal(p)}
            className="group cursor-pointer flex flex-col gap-4 bg-white p-4 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all duration-500"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              <img 
                src={p.coverImage} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-xl opacity-0 lg:group-hover:opacity-100 transition-all shadow-sm">
                <ArrowUpRight size={16} className="text-duke-blue" />
              </div>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h3 className="font-bold text-base md:text-lg tracking-tight group-hover:text-duke-blue transition-colors line-clamp-2 h-12 md:h-14 leading-tight">{p.title}</h3>
              <div className="flex gap-2">
                {p.tags.slice(0, 1).map(t => (
                  <span key={t} className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-slate-400">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[200] bg-white flex flex-col overflow-y-auto"
          onClick={closeModal}
        >
          {/* Header Area with Close Button */}
          <div className="sticky top-0 z-[210] flex justify-between items-center p-4 md:p-6 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-duke-blue/10 flex items-center justify-center text-duke-blue">
                <Info size={20} />
              </div>
              <h3 className="font-bold text-sm md:text-xl tracking-tight truncate max-w-[200px] md:max-w-md">{selectedProject.title}</h3>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); closeModal(); }} 
              className="p-2 md:p-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full transition-all flex items-center justify-center group shadow-sm"
              aria-label="Close details"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
          
          <div 
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-[1600px] mx-auto p-4 md:p-10 lg:p-12 flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Column: Visualization Area */}
            <div className="lg:w-[60%] w-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-duke-blue/10 p-1.5 rounded-lg">
                    <BarChart2 size={16} className="text-duke-blue" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block leading-none">Visualization</span>
                    <span className="text-[9px] font-medium text-duke-blue/60">{currentImgIdx + 1} of {selectedProject.images.length} views</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsFullScreen(true)}
                  className="group flex items-center gap-2 bg-duke-blue text-white px-3 py-1.5 rounded-lg font-bold text-[9px] uppercase tracking-widest transition-all hover:bg-blue-700 shadow-md"
                >
                  <Maximize2 size={12} />
                  <span>Inspect</span>
                </button>
              </div>
              
              <div 
                className="relative aspect-video lg:aspect-auto lg:h-[60vh] rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-inner group/img cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
              >
                <div className="absolute inset-0 bg-duke-blue/0 lg:group-hover/img:bg-duke-blue/[0.02] transition-colors z-10 flex items-center justify-center pointer-events-none">
                   <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl opacity-0 lg:group-hover/img:opacity-100 translate-y-4 lg:group-hover/img:translate-y-0 transition-all duration-300 flex items-center gap-2">
                      <ZoomIn size={18} className="text-duke-blue" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Tap to Zoom</span>
                   </div>
                </div>

                <img 
                  src={selectedProject.images[currentImgIdx]} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain p-2 md:p-6"
                />
                
                {selectedProject.images.length > 1 && (
                  <div className="absolute inset-x-4 bottom-4 flex justify-between items-center bg-white/95 backdrop-blur-xl p-2 rounded-xl shadow-2xl border border-slate-100 z-20" onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-1.5 px-2 overflow-x-auto no-scrollbar">
                      {selectedProject.images.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setCurrentImgIdx(i)}
                          className={`h-1 rounded-full transition-all duration-500 flex-shrink-0 ${i === currentImgIdx ? 'w-8 bg-duke-blue' : 'w-1.5 bg-slate-200 hover:bg-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={prevImg} className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-duke-blue hover:text-white transition-all"><ChevronLeft size={16} /></button>
                      <button onClick={nextImg} className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-duke-blue hover:text-white transition-all"><ChevronRight size={16} /></button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Image Thumbnails on Mobile */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2 lg:hidden no-scrollbar">
                 {selectedProject.images.map((img, i) => (
                   <button 
                    key={i} 
                    onClick={() => setCurrentImgIdx(i)}
                    className={`w-16 h-12 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${i === currentImgIdx ? 'border-duke-blue scale-95' : 'border-slate-100 opacity-60'}`}
                   >
                     <img src={img} className="w-full h-full object-cover" />
                   </button>
                 ))}
              </div>
            </div>

            {/* Right Column: Detailed Insights */}
            <div className="lg:w-[40%] w-full flex flex-col">
              <div className="bg-slate-50/50 border border-slate-200/50 p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[3rem] h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-duke-blue text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] block">Analytical Findings</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter-custom mb-6 lg:mb-10 leading-tight text-slate-900">{selectedProject.title}</h2>
                
                <div className="space-y-6 md:space-y-8 mb-10 flex-1">
                  {selectedProject.description.map((desc, i) => {
                    const parts = desc.split(':');
                    const label = parts[0];
                    const content = parts.slice(1).join(':');
                    return (
                      <div key={i} className="flex gap-4 items-start group/item">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-duke-blue text-[9px] md:text-[11px] font-bold shrink-0 mt-0.5 border border-slate-200 shadow-sm group-hover/item:bg-duke-blue group-hover/item:text-white transition-colors">
                          {i+1}
                        </div>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                          <strong className="font-bold text-slate-800">{label}:</strong> {content || desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-8 pt-8 border-t border-slate-200 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(t => (
                      <span key={t} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest bg-white px-3 py-1.5 rounded-lg text-slate-500 border border-slate-200 shadow-sm">{t}</span>
                    ))}
                  </div>
                  
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 bg-slate-900 text-white w-full py-4 rounded-2xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest hover:bg-duke-blue transition-all shadow-xl active:scale-95"
                    >
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

      {/* Full-Screen Lightbox */}
      {isFullScreen && selectedProject && (
        <div 
          className="fixed inset-0 z-[300] bg-black backdrop-blur-3xl flex items-center justify-center animate-in fade-in duration-500 overflow-hidden"
          onClick={() => setIsFullScreen(false)}
        >
          <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-[310] bg-gradient-to-b from-black/80 to-transparent">
            <div className="flex flex-col max-w-[70%]">
              <span className="text-white/40 text-[8px] font-bold uppercase tracking-[0.2em] mb-1">Source Resolution</span>
              <h4 className="text-white font-bold tracking-tight text-lg md:text-xl truncate">{selectedProject.title}</h4>
            </div>
            <button 
              className="text-white/60 hover:text-white transition-all p-3 bg-white/10 rounded-full border border-white/10"
              onClick={() => setIsFullScreen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button 
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-6 z-[320] text-white/40 hover:text-duke-blue transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 hidden xl:block border border-white/5"
            >
              <ChevronLeft size={48} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-6 z-[320] text-white/40 hover:text-duke-blue transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 hidden xl:block border border-white/5"
            >
              <ChevronRight size={48} />
            </button>

            <img 
              src={selectedProject.images[currentImgIdx]} 
              alt="High Res" 
              className="max-w-full max-h-[85%] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center gap-6 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 max-w-full">
              {selectedProject.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(i); }}
                  className={`w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    i === currentImgIdx ? 'border-duke-blue scale-110' : 'border-white/10 opacity-30'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;