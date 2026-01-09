import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowUpRight, Github, Info, BarChart2, ZoomIn } from 'lucide-react';
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
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsFullScreen(false);
  };

  const nextImg = () => {
    if (!selectedProject) return;
    setCurrentImgIdx((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImg = () => {
    if (!selectedProject) return;
    setCurrentImgIdx((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <span className="text-duke-blue text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-custom">Data & AI Portfolio</h2>
        </div>
        <p className="text-slate-500 max-w-sm text-sm leading-relaxed font-light hidden lg:block">
          Translating complex datasets into actionable business intelligence through advanced machine learning architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                <ArrowUpRight size={16} className="text-duke-blue" />
              </div>
            </div>
            <div className="flex flex-col gap-1 px-1">
              <h3 className="font-bold text-lg tracking-tight group-hover:text-duke-blue transition-colors line-clamp-2 h-14 leading-tight">{p.title}</h3>
              <div className="flex gap-2">
                {p.tags.slice(0, 1).map(t => (
                  <span key={t} className="text-[9px] uppercase font-bold tracking-widest text-slate-400">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] bg-white/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 overflow-hidden">
          <button onClick={closeModal} className="absolute top-8 right-8 text-slate-900 hover:text-duke-blue transition-colors z-[70] p-2 bg-slate-50 rounded-full">
            <X size={24} />
          </button>
          
          <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl h-full lg:h-auto overflow-y-auto lg:overflow-visible py-10 lg:py-0 items-center">
            {/* Left Column: Data Visualization Image */}
            <div className="lg:w-1/2 w-full flex flex-col gap-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <BarChart2 size={18} className="text-duke-blue" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Data Visualization</span>
                </div>
                <button 
                  onClick={() => setIsFullScreen(true)}
                  className="flex items-center gap-1.5 text-duke-blue hover:text-blue-700 font-bold text-[9px] uppercase tracking-widest transition-all"
                >
                  <ZoomIn size={12} />
                  <span>Click to enlarge</span>
                </button>
              </div>
              
              <div 
                className="relative aspect-square lg:aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center shadow-2xl group/img cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
              >
                <img 
                  src={selectedProject.images[currentImgIdx]} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain" // Use contain to ensure no cropping for charts
                />
                
                {selectedProject.images.length > 1 && (
                  <div className="absolute inset-x-4 bottom-4 flex justify-between items-center bg-white/80 backdrop-blur-md p-2 rounded-2xl shadow-lg" onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-2 px-2">
                      {selectedProject.images.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setCurrentImgIdx(i)}
                          className={`w-8 h-1 rounded-full transition-all ${i === currentImgIdx ? 'bg-duke-blue' : 'bg-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={prevImg} className="p-1 hover:text-duke-blue transition-colors"><ChevronLeft size={16} /></button>
                      <button onClick={nextImg} className="p-1 hover:text-duke-blue transition-colors"><ChevronRight size={16} /></button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Findings & Project Info */}
            <div className="lg:w-1/2 w-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Info size={16} className="text-duke-blue" />
                <span className="text-duke-blue text-[10px] font-bold uppercase tracking-[0.3em] block">Main Findings & Analysis</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter-custom mb-8 leading-none">{selectedProject.title}</h2>
              
              <div className="space-y-6 mb-10">
                {selectedProject.description.map((desc, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-duke-blue text-[10px] font-bold shrink-0 mt-0.5 border border-blue-100">
                      {i+1}
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed font-light">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-8 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg text-slate-500 border border-slate-100">{t}</span>
                  ))}
                </div>
                
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-duke-blue transition-all ml-auto"
                  >
                    <Github size={14} />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Immersive Full-Screen Lightbox for Chart Analysis */}
      {isFullScreen && selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-500 overflow-hidden"
          onClick={() => setIsFullScreen(false)}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-[110]">
            <div className="flex flex-col">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">High Resolution Analysis</span>
              <h4 className="text-white font-bold tracking-tight text-xl">{selectedProject.title}</h4>
            </div>
            <button 
              className="text-white/60 hover:text-white transition-all p-4 bg-white/5 rounded-full hover:bg-white/10"
              onClick={() => setIsFullScreen(false)}
            >
              <X size={32} />
            </button>
          </div>
          
          {/* Main Image View */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-20">
            {/* Navigation Arrows */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-8 z-[120] text-white/40 hover:text-white transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 hidden md:block"
            >
              <ChevronLeft size={48} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-8 z-[120] text-white/40 hover:text-white transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 hidden md:block"
            >
              <ChevronRight size={48} />
            </button>

            <img 
              src={selectedProject.images[currentImgIdx]} 
              alt="High Res Chart" 
              className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-700"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="absolute bottom-0 left-0 w-full p-8 flex justify-center gap-4 bg-gradient-to-t from-black/60 to-transparent overflow-x-auto no-scrollbar">
            {selectedProject.images.map((img, i) => (
              <button 
                key={i} 
                onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(i); }}
                className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 transform ${
                  i === currentImgIdx ? 'border-duke-blue scale-110 shadow-xl' : 'border-white/10 opacity-40 hover:opacity-80'
                }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;