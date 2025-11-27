import React, { useEffect, useState } from 'react';
import { getHistory } from '../services/supabaseService';
import { HistoryItem } from '../types';

export const History: React.FC = () => {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);

  useEffect(() => {
    getHistory().then(setHistoryItems);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our History</h1>
          <p className="text-slate-600">A timeline of the Turk community's journey in Pakistan.</p>
        </div>

        <div className="relative border-l-2 border-primary-200 ml-4 md:ml-0 space-y-12">
          {historyItems.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-0">
               {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-primary-600 border-4 border-slate-50 md:left-1/2 md:-translate-x-[10px]" />
              
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                 {/* Empty space for alternate side */}
                 <div className="hidden md:block w-5/12" />

                 {/* Card */}
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 md:w-5/12 hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-3">
                        {item.year_or_date}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    {item.image_url && (
                        <img 
                            src={item.image_url} 
                            alt={item.title} 
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                    )}
                    <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                    </p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
