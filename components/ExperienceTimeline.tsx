
import React, { useState } from 'react';
import { Briefcase, MapPin, Plus, Minus, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="text-duke-blue text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Professional Journey</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-custom">Career Experience</h2>
      </div>

      <div className="space-y-4">
        {EXPERIENCES.map((exp, idx) => (
          <div 
            key={idx}
            className={`group bg-white rounded-3xl transition-all duration-500 overflow-hidden border ${
              expandedIdx === idx ? 'border-duke-blue shadow-lg shadow-blue-900/5' : 'border-slate-100 hover:border-slate-200'
            }`}
          >
            <button 
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
            >
              <div className="flex gap-6 items-center flex-1">
                <div className={`w-24 h-24 p-3 rounded-2xl transition-all duration-500 hidden sm:flex items-center justify-center bg-white border ${
                  expandedIdx === idx ? 'border-duke-blue shadow-md' : 'border-slate-100'
                }`}>
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-lg" />
                  ) : (
                    <Briefcase size={32} className={expandedIdx === idx ? 'text-duke-blue' : 'text-slate-400'} strokeWidth={1.5} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-duke-blue transition-colors">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-slate-900 font-bold text-xs uppercase tracking-widest">{exp.company}</p>
                    <span className="text-slate-300">|</span>
                    <p className="text-slate-400 text-xs font-medium italic">{exp.duration}</p>
                  </div>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                expandedIdx === idx ? 'bg-duke-blue text-white' : 'bg-slate-50 text-slate-400'
              }`}>
                {expandedIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>

            <div className={`transition-all duration-500 ease-out overflow-hidden ${
              expandedIdx === idx ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 md:ml-32 border-t border-slate-50 pt-6">
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">
                   <span className="flex items-center gap-1"><MapPin size={10} /> {exp.location}</span>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex gap-4 text-slate-600 text-sm leading-relaxed font-light">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-duke-blue mt-0.5">
                        <ArrowRight size={12} />
                      </div>
                      <p className="flex-1">{ach}</p>
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
