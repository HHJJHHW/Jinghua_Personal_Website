
import React, { useState, useEffect } from 'react';
import { Camera, Music, Instagram, ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { HOBBIES } from '../constants';

const Hobbies: React.FC = () => {
  const [activeMusicIdx, setActiveMusicIdx] = useState(0);
  const [lightbox, setLightbox] = useState<{ isOpen: boolean; type: 'music' | 'photo'; index: number }>({
    isOpen: false,
    type: 'music',
    index: 0,
  });

  useEffect(() => {
    if (HOBBIES.music.images && HOBBIES.music.images.length > 1 && !lightbox.isOpen) {
      const interval = setInterval(() => {
        setActiveMusicIdx((prev) => (prev + 1) % HOBBIES.music.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [lightbox.isOpen]);

  const openLightbox = (type: 'music' | 'photo', index: number) => {
    setLightbox({ isOpen: true, type, index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const navigateLightbox = (direction: number) => {
    const list = lightbox.type === 'music' ? HOBBIES.music.images : HOBBIES.photography;
    const nextIndex = (lightbox.index + direction + list.length) % list.length;
    setLightbox({ ...lightbox, index: nextIndex });
  };

  const currentImageUrl = lightbox.type === 'music' 
    ? HOBBIES.music.images[lightbox.index] 
    : HOBBIES.photography[lightbox.index].url;

  const currentCaption = lightbox.type === 'music'
    ? HOBBIES.music.title
    : HOBBIES.photography[lightbox.index].caption;

  return (
    <div id="hobbies" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Music Column */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <span className="text-duke-blue text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Personal Narrative</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-custom mb-6 font-display">Symphony & Strategy</h2>
            <p className="text-slate-500 leading-relaxed font-light">
              Leadership isn't just about data; it's about harmony. My background as a section leader taught me the rhythm of high-performance teams.
            </p>
          </div>

          <div className="group relative rounded-[2.5rem] overflow-hidden bg-white shadow-sm border border-slate-100 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-900/5">
            <div 
              className="aspect-[4/5] md:aspect-[16/9] overflow-hidden relative cursor-zoom-in"
              onClick={() => openLightbox('music', activeMusicIdx)}
            >
              {HOBBIES.music.images.map((img, idx) => (
                <img 
                  key={img}
                  src={img} 
                  alt={`Tuba Performance ${idx + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    idx === activeMusicIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                  }`} 
                  style={{ objectPosition: 'center 20%' }}
                />
              ))}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all shadow-xl">
                  <ZoomIn size={24} className="text-duke-blue" />
                </div>
              </div>
            </div>
            <div className="p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-duke-blue">
                  <Music size={20} />
                </div>
                <h3 className="font-bold text-xl tracking-tight">{HOBBIES.music.title}</h3>
              </div>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                {HOBBIES.music.description}
              </p>
              <div className="flex gap-1.5 mt-6">
                {HOBBIES.music.images.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={(e) => { e.stopPropagation(); setActiveMusicIdx(i); }}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === activeMusicIdx ? 'w-6 bg-duke-blue' : 'w-1.5 bg-slate-200 hover:bg-slate-300'
                    }`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Photography Column */}
        <div className="lg:col-span-7">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-custom font-display">Visual Portfolio</h2>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href={HOBBIES.photographyPortfolio} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-duke-blue hover:text-blue-700 font-bold text-[11px] uppercase tracking-widest transition-all bg-blue-50 px-4 py-2 rounded-xl border border-blue-100"
              >
                <ExternalLink size={14} />
                <span>Full Portfolio</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400 hover:text-duke-blue cursor-pointer transition-colors">
                <Instagram size={18} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Follow Journey</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {HOBBIES.photography.map((photo, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox('photo', idx)}
                className={`group relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100 cursor-zoom-in ${idx === 1 || idx === 2 ? 'md:translate-y-12' : ''}`}
              >
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Photography</span>
                  <p className="text-white text-lg font-bold tracking-tight">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Immersive Lightbox Modal */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-500 overflow-hidden"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-[110]">
            <div className="flex flex-col">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">Viewing Entry</span>
              <h4 className="text-white font-bold tracking-tight text-xl">{currentCaption}</h4>
            </div>
            <button 
              className="text-white/60 hover:text-white transition-all p-4 bg-white/5 rounded-full hover:bg-white/10"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
          </div>
          
          {/* Main Image View */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-20">
            {/* Navigation Arrows */}
            <button 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-8 z-[120] text-white/40 hover:text-white transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 hidden md:block"
            >
              <ChevronLeft size={48} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-8 z-[120] text-white/40 hover:text-white transition-all p-4 bg-white/5 rounded-full hover:bg-white/10 hidden md:block"
            >
              <ChevronRight size={48} />
            </button>

            <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center group/image">
              <img 
                src={currentImageUrl} 
                alt="Enlarged Portfolio View" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-700"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="absolute bottom-0 left-0 w-full p-8 flex justify-center gap-4 bg-gradient-to-t from-black/60 to-transparent">
            {(lightbox.type === 'music' ? HOBBIES.music.images : HOBBIES.photography).map((item, i) => (
              <button 
                key={i} 
                onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: i }); }}
                className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 transform ${
                  i === lightbox.index ? 'border-duke-blue scale-110 shadow-xl' : 'border-white/10 opacity-40 hover:opacity-80'
                }`}
              >
                <img 
                  src={typeof item === 'string' ? item : item.url} 
                  className="w-full h-full object-cover" 
                  alt="Thumbnail" 
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
