import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FEATURES } from '../constants';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-primary-900/40 z-10" />
            <img 
              src="https://picsum.photos/id/1033/1920/1080" 
              alt="Community Gathering" 
              className="w-full h-full object-cover opacity-50"
            />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-up">
            Welcome to Turks.pk
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 font-light leading-relaxed">
            A Platform for Our Community Library, Events, Gallery, History & Population.
            Uniting our heritage with our future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
                onClick={() => navigate('/about')}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2"
            >
              Discover Our Roots <ArrowRight size={18} />
            </button>
            <button 
                onClick={() => navigate('/population')}
                className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-full transition-all flex items-center justify-center"
            >
              View Statistics
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Explore The Platform</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div 
                key={idx}
                className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/${feature.title.toLowerCase()}`)}
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Vision Section */}
      <section className="py-24 bg-slate-50 relative">
          <div className="max-w-5xl mx-auto px-4 text-center">
             <blockquote className="font-serif text-2xl md:text-3xl text-slate-700 italic leading-relaxed">
                "Preserving our past is the foundation for building our future. Turks.pk serves as the digital home for every Turk in Pakistan."
             </blockquote>
          </div>
      </section>
    </div>
  );
};
