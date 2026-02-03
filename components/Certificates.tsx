import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <span className="text-duke-blue dark:text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Validation</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter-custom dark:text-white">Certificates & Licence</h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm leading-relaxed font-light hidden lg:block">
          Continuous learning and professional certification in data science, analytics, and business intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert, idx) => (
          <div 
            key={idx}
            className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-duke-blue dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-8">
                <div className="w-40 h-28 rounded-2xl bg-white dark:bg-white p-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer} 
                    className="w-full h-full object-contain transition-all duration-500" 
                  />
                </div>
                <div className="text-duke-blue/20 dark:text-blue-400/20 group-hover:text-duke-blue dark:group-hover:text-blue-400 transition-colors pt-2">
                  <Award size={28} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-duke-blue dark:group-hover:text-blue-400 dark:text-slate-100 transition-colors leading-snug">
                {cert.title}
              </h3>
              <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
                {cert.issuer}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-medium">
                <Calendar size={14} />
                <span>Issued {cert.date}</span>
              </div>
              {cert.url && (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-duke-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold text-[10px] uppercase tracking-widest transition-all"
                >
                  Verify <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
        
        {/* Placeholder for future certs */}
        <div className="border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center opacity-50">
          <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600 mb-4">
             <CheckCircle size={20} />
          </div>
          <p className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">More in Progress</p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;