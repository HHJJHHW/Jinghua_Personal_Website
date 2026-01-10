import { ArrowRight, Briefcase, MapPin, Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="mb-8 md:mb-12">
        <span className="text-duke-blue text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 block">Professional Journey</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom">Career Experience</h2>
      </div>

      <div className="space-y-4 md:space-y-6">
        {EXPERIENCES.map((exp, idx) => (
          <div 
            key={idx}
            className={`group bg-white rounded-xl md:rounded-3xl transition-all duration-500 overflow-hidden border ${
              expandedIdx === idx ? 'border-duke-blue shadow-lg shadow-blue-900/5' : 'border-slate-100 hover:border-slate-200'
            }`}
          >
            <button 
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className="w-full text-left p-4 md:p-8 flex items-start justify-between gap-3 md:gap-6"
            >
              <div className="flex gap-3 md:gap-6 items-center flex-1 min-w-0">
                <div className={`w-12 h-12 md:w-24 md:h-24 p-1.5 md:p-3 rounded-lg md:rounded-2xl transition-all duration-500 flex items-center justify-center bg-white border flex-shrink-0 ${
                  expandedIdx === idx ? 'border-duke-blue shadow-md' : 'border-slate-100'
                }`}>
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-md" />
                  ) : (
                    <Briefcase size={18} className={expandedIdx === idx ? 'text-duke-blue' : 'text-slate-400'} strokeWidth={1.5} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] md:text-xl font-bold tracking-tight mb-1 md:mb-2 group-hover:text-duke-blue transition-colors leading-tight whitespace-normal break-words">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <p className="text-slate-900 font-bold text-[10px] md:text-xs uppercase tracking-widest whitespace-normal break-words leading-tight">
                      {exp.company}
                    </p>
                    <span className="text-slate-300 hidden sm:inline">|</span>
                    <p className="text-slate-400 text-[10px] md:text-xs font-medium italic leading-tight">
                      {exp.duration}
                    </p>
                  </div>
                </div>
              </div>
              <div className={`w-7 h-7 md:w-10 md:h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all mt-2 md:mt-0 ${
                expandedIdx === idx ? 'bg-duke-blue text-white' : 'bg-slate-50 text-slate-400'
              }`}>
                {expandedIdx === idx ? <Minus size={14} /> : <Plus size={14} />}
              </div>
            </button>

            <div className={`transition-all duration-500 ease-out overflow-hidden ${
              expandedIdx === idx ? 'max-h-[1200px] opacity-100 pb-6 md:pb-8' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-4 md:ml-32 border-t border-slate-50 pt-4 md:pt-6">
                <div className="flex gap-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 md:mb-6">
                   <span className="flex items-center gap-1"><MapPin size={10} md:size={12} /> {exp.location}</span>
                </div>
                <div className="grid grid-cols-1 gap-4 md:gap-6">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex gap-3 md:gap-4 text-slate-600 text-[12px] md:text-sm leading-relaxed font-light">
                      <div className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-50 flex items-center justify-center text-duke-blue mt-0.5">
                        <ArrowRight size={10} md:size={12} />
                      </div>
                      <p className="flex-1 break-words">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;