import { ArrowRight, Briefcase, ChevronDown, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import AIAvatar from './components/AIAvatar';
import Certificates from './components/Certificates';
import ExperienceTimeline from './components/ExperienceTimeline';
import Hobbies from './components/Hobbies';
import ProjectGallery from './components/ProjectGallery';
import { PERSONAL_INFO } from './constants';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'hobbies', label: 'Interests' }
];

const SectionWrapper: React.FC<{ id: string, children: React.ReactNode, className?: string }> = ({ id, children, className }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`snap-start min-h-screen w-full flex items-center justify-center relative transition-colors duration-1000 ${isActive ? 'section-active' : ''} ${className}`}
    >
      <div className="page-content w-full h-full flex flex-col py-24 md:py-0">
        {children}
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure dark mode is disabled when the button is removed
    document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    const handleScroll = () => {
      const sections = SECTIONS.map(s => document.getElementById(s.id));
      const containerTop = container?.getBoundingClientRect().top || 0;
      
      let current = SECTIONS[0].id;
      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top - containerTop <= 100) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };

    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContactDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="h-screen w-screen overflow-hidden selection:bg-duke-blue selection:text-white relative font-sans bg-[#f7f9fc] transition-colors duration-500">
      
      {/* Navigation Dot Indicator */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 items-center">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group relative flex items-center justify-end"
          >
            <span className={`absolute right-8 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${activeSection === s.id ? 'opacity-100 translate-x-0 text-duke-blue' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              {s.label}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${activeSection === s.id ? 'bg-duke-blue scale-150 shadow-lg shadow-blue-900/40' : 'bg-slate-300 group-hover:bg-slate-400 group-hover:scale-125'}`} />
          </button>
        ))}
      </div>

      {/* Main Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
          <div className="font-bold text-xl md:text-2xl tracking-tighter-custom duke-blue font-display cursor-pointer" onClick={() => scrollTo('home')}>JH.HE</div>
          
          <div className="hidden lg:flex gap-10 text-[11px] font-bold uppercase tracking-widest-custom text-slate-500">
            {SECTIONS.map(s => (
              <button 
                key={s.id} 
                onClick={() => scrollTo(s.id)} 
                className={`transition-colors hover:text-duke-blue ${activeSection === s.id ? 'text-duke-blue' : ''}`}
              >
                {s.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowContactDropdown(!showContactDropdown)}
                className="bg-duke-blue text-white px-5 md:px-7 py-2.5 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2"
              >
                Contact
              </button>
              {showContactDropdown && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-2 animate-in fade-in zoom-in duration-200 z-[110]">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-duke-blue flex items-center justify-center group-hover:bg-duke-blue group-hover:text-white transition-all">
                      <Mail size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Me</p>
                      <p className="text-xs font-semibold text-slate-800 truncate">{PERSONAL_INFO.email}</p>
                    </div>
                  </a>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`} 
                    className="flex items-center gap-3 px-5 py-4 hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Call Me</p>
                      <p className="text-xs font-semibold text-slate-800">{PERSONAL_INFO.phone}</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Container */}
      <div className="snap-container h-full overflow-y-scroll snap-y snap-proximity md:snap-mandatory scroll-smooth no-scrollbar">
        
        {/* HERO SECTION */}
        <SectionWrapper id="home" className="bg-transparent">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Education Badges */}
              <div className="flex flex-col gap-3 mb-8 items-center lg:items-start">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white text-slate-600 text-[10px] font-bold uppercase tracking-[0.1em] border border-slate-200 shadow-sm transition-transform hover:translate-x-1 cursor-default">
                  <img src="https://i.postimg.cc/Hjnz8Vr4/Northeastern_University_Logo.png" alt="NEU" className="w-8 h-8 object-contain" />
                  Northeastern University Alumni
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-blue-50/50 text-duke-blue text-[10px] font-bold uppercase tracking-[0.1em] border border-blue-100 shadow-sm transition-transform hover:translate-x-1 cursor-default">
                  <img src="https://i.postimg.cc/8f7m208C/Fuqua-School-of-Business-logo-square-simple-svg.png" alt="Duke Fuqua" className="w-8 h-8 object-contain" />
                  Duke Fuqua MQM Candidate
                </div>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter-custom leading-tight lg:leading-[0.9]">
                I'm <span className="duke-blue">{PERSONAL_INFO.name.split(' ')[0]}</span><span className="text-duke-blue/30">.</span>
              </h1>
              <p className="text-base md:text-xl text-slate-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                {PERSONAL_INFO.title}. Specializing in bridging the gap between <span className="font-bold text-slate-900">complex data</span> and <span className="font-bold text-slate-900">strategic decisions</span>.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                <div className="flex items-center gap-2 text-slate-500 bg-white border border-slate-100 px-4 py-2 rounded-xl shadow-sm">
                  <MapPin size={14} />
                  <span className="text-xs font-medium">{PERSONAL_INFO.location}</span>
                </div>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-500 hover:text-duke-blue bg-white border border-slate-100 px-4 py-2 rounded-xl shadow-sm hover:border-duke-blue transition-all"
                >
                  <Linkedin size={14} />
                  <span className="text-xs font-medium">LinkedIn</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button 
                  onClick={() => scrollTo('projects')} 
                  className="bg-duke-blue text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Explore Work <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => scrollTo('experience')} 
                  className="bg-white text-duke-blue border-2 border-duke-blue/10 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-duke-blue hover:bg-duke-blue/5 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  Career <Briefcase size={16} />
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-48 h-48 md:w-[400px] md:h-[400px]">
                <div className="absolute inset-0 border-[1px] border-duke-blue/20 rounded-full animate-[spin_25s_linear_infinite]" />
                <div className="absolute -inset-4 border-[1px] border-duke-blue/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                <div className="w-full h-full rounded-full overflow-hidden border-[6px] md:border-[10px] border-white shadow-2xl relative z-10 bg-slate-200">
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-slate-300 hidden lg:block">
            <ChevronDown size={24} />
          </div>
        </SectionWrapper>

        {/* PROJECTS SECTION */}
        <SectionWrapper id="projects" className="bg-[#f2f5fa]">
          <ProjectGallery />
        </SectionWrapper>

        {/* EXPERIENCE SECTION */}
        <SectionWrapper id="experience" className="bg-transparent">
          <ExperienceTimeline />
        </SectionWrapper>

        {/* CERTIFICATES SECTION */}
        <SectionWrapper id="certificates" className="bg-[#f2f5fa]">
          <Certificates />
        </SectionWrapper>

        {/* HOBBIES SECTION */}
        <SectionWrapper id="hobbies" className="bg-transparent">
          <div className="w-full min-h-full flex flex-col">
            <div className="flex-1 flex items-center py-10 md:py-0">
              <Hobbies />
            </div>
            {/* Minimalist Footer inside the last page */}
            <footer className="bg-white/50 backdrop-blur-sm border-t border-slate-100 py-8 md:py-10 w-full mt-auto">
              <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                  <div className="font-bold text-lg md:text-xl tracking-tighter-custom duke-blue font-display">JH.HE</div>
                  <p className="text-slate-400 text-[9px] font-medium uppercase tracking-widest">Master of Quantitative Management</p>
                </div>
                <div className="flex gap-8">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-duke-blue transition-all transform hover:scale-125">
                    <Linkedin size={20} />
                  </a>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">© {new Date().getFullYear()} JINGHUA HE</p>
                </div>
              </div>
            </footer>
          </div>
        </SectionWrapper>

      </div>

      {/* AI Avatar */}
      <AIAvatar />
    </div>
  );
};

export default App;