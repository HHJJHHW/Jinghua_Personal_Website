
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowUpRight, Github, Info, BarChart2, ZoomIn, Maximize2 } from 'lucide-react';
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
                style={{ imageRendering: 'auto' }}
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

      {/* Main Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[60] bg-white/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden"
          onClick={closeModal}
        >
          {/* Enhanced Close Button Position */}
          <button 
            onClick={(e) => { e.stopPropagation(); closeModal(); }} 
            className="absolute top-12 right-6 md:top-16 md:right-16 text-slate-900 hover:text-duke-blue transition-all z-[70] p-4 bg-slate-100/80 hover:bg-slate-200 rounded-full shadow-lg border border-slate-200/50 flex items-center justify-center group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div 
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-[1400px] h-full lg:h-[85vh] overflow-y-auto lg:overflow-hidden py-24 lg:py-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Column: Enlarged Data Visualization Area (Occupies ~65%) */}
            <div className="lg:w-[62%] w-full flex flex-col h-full">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <div className="bg-duke-blue/10 p-2 rounded-lg">
                    <BarChart2 size={20} className="text-duke-blue" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block leading-none">High Fidelity Visualization</span>
                    <span className="text-[10px] font-medium text-duke-blue/60">{currentImgIdx + 1} of {selectedProject.images.length} available views</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsFullScreen(true)}
                  className="group flex items-center gap-2 bg-duke-blue text-white px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-blue-700 shadow-md shadow-blue-900/10"
                >
                  <Maximize2 size={14} />
                  <span>Inspect 4K View</span>
                </button>
              </div>
              
              <div 
                className="relative flex-1 rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/50 flex items-center justify-center shadow-inner group/img cursor-zoom-in"
                onClick={() => setIsFullScreen(true)}
              >
                {/* Visual indicator for click-to-zoom */}
                <div className="absolute inset-0 bg-duke-blue/0 group-hover/img:bg-duke-blue/[0.02] transition-colors z-10 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl opacity-0 group-hover/img:opacity-100 translate-y-4 group-hover/img:translate-y-0 transition-all duration-300 flex items-center gap-2">
                      <ZoomIn size={18} className="text-duke-blue" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">Zoom for Detail</span>
                   </div>
                </div>

                <img 
                  src={selectedProject.images[currentImgIdx]} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-contain p-2 lg:p-4"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    // @ts-ignore
                    msImageRendering: 'pixelated'
                  }}
                />
                
                {selectedProject.images.length > 1 && (
                  <div className="absolute inset-x-6 bottom-6 flex justify-between items-center bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-2xl border border-slate-100 z-20" onClick={(e) => e.stopPropagation()}>
                    <div className="flex gap-2.5 px-3">
                      {selectedProject.images.map((_, i) => (
                        <button 
                          key={i} 
                          onClick={() => setCurrentImgIdx(i)}
                          className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImgIdx ? 'w-10 bg-duke-blue' : 'w-2 bg-slate-200 hover:bg-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={prevImg} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 hover:bg-duke-blue hover:text-white transition-all"><ChevronLeft size={20} /></button>
                      <button onClick={nextImg} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 hover:bg-duke-blue hover:text-white transition-all"><ChevronRight size={20} /></button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Detailed Insights (Occupies ~38%) */}
            <div className="lg:w-[38%] w-full flex flex-col h-full lg:justify-center">
              <div className="bg-blue-50/50 border border-blue-100/50 p-8 rounded-[2.5rem]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                     <Info size={20} className="text-duke-blue" />
                  </div>
                  <span className="text-duke-blue text-[11px] font-bold uppercase tracking-[0.25em] block">Analytical Findings</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter-custom mb-8 leading-tight text-slate-900">{selectedProject.title}</h2>
                
                <div className="space-y-6 mb-10 h-auto lg:max-h-[45vh] overflow-y-auto pr-3 custom-scrollbar">
                  {selectedProject.description.map((desc, i) => {
                    const [label, ...content] = desc.split(':');
                    return (
                      <div key={i} className="flex gap-4 items-start group/item">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-duke-blue text-[11px] font-bold shrink-0 mt-0.5 border border-slate-100 shadow-sm group-hover/item:bg-duke-blue group-hover/item:text-white transition-colors">
                          {i+1}
                        </div>
                        <p className="text-slate-600 text-[16px] leading-relaxed font-light">
                          <strong className="font-bold text-slate-800">{label}:</strong> {content.join(':')}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-8 pt-8 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(t => (
                      <span key={t} className="text-[9px] font-bold uppercase tracking-widest bg-white px-3 py-2 rounded-xl text-slate-500 border border-slate-100 shadow-sm">{t}</span>
                    ))}
                  </div>
                  
                  {selectedProject.githubUrl && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-3 bg-slate-900 text-white w-full py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-duke-blue transition-all shadow-xl shadow-slate-900/10"
                    >
                      <Github size={16} />
                      <span>Explore Technical Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Immersive Full-Screen Lightbox for Chart Analysis */}
      {isFullScreen && selectedProject && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center animate-in fade-in duration-500 overflow-hidden"
          onClick={() => setIsFullScreen(false)}
        >
          {/* Top Bar with Downward shifted close button */}
          <div className="absolute top-0 left-0 w-full p-8 md:p-16 flex justify-between items-center z-[110]">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Direct Pixel Access Mode</span>
              </div>
              <h4 className="text-white font-bold tracking-tight text-2xl">{selectedProject.title}</h4>
            </div>
            <button 
              className="text-white/60 hover:text-white transition-all p-5 bg-white/5 rounded-full hover:bg-white/10 mt-6 border border-white/10 group"
              onClick={() => setIsFullScreen(false)}
            >
              <X size={32} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>
          
          {/* Main Image View - Maximized Space */}
          <div className="relative w-full h-full flex items-center justify-center p-2 md:p-8 lg:p-12">
            {/* Massive Navigation Arrows */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-12 z-[120] text-white/30 hover:text-duke-blue transition-all p-6 bg-white/5 rounded-full hover:bg-white/10 hidden xl:block border border-white/5"
            >
              <ChevronLeft size={64} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-12 z-[120] text-white/30 hover:text-duke-blue transition-all p-6 bg-white/5 rounded-full hover:bg-white/10 hidden xl:block border border-white/5"
            >
              <ChevronRight size={64} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center group/full">
              <img 
                src={selectedProject.images[currentImgIdx]} 
                alt="High Res Chart" 
                className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)]"
                style={{ 
                  imageRendering: 'crisp-edges',
                  // @ts-ignore
                  msImageRendering: 'pixelated'
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Bottom Interactive Navigation Strip */}
          <div className="absolute bottom-0 left-0 w-full p-12 flex flex-col items-center gap-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {selectedProject.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={(e) => { e.stopPropagation(); setCurrentImgIdx(i); }}
                  className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-500 transform ${
                    i === currentImgIdx ? 'border-duke-blue scale-110 shadow-[0_0_30px_rgba(0,48,135,0.4)]' : 'border-white/10 opacity-30 hover:opacity-100'
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" alt="Thumbnail" />
                </button>
              ))}
            </div>
            <div className="text-white/30 text-[9px] font-bold uppercase tracking-[0.4em]">
              Enhanced Sharpness Enabled • Source Quality: Native Resolution
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
