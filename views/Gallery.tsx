import React, { useEffect, useState } from 'react';
import { getGallery } from '../services/supabaseService';
import { GalleryItem } from '../types';
import { PlayCircle, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    getGallery().then(setItems);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Community Gallery</h1>
          <p className="text-slate-600">Moments frozen in time. Images and videos from our journey.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item) => (
            <div 
                key={item.id} 
                className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group relative"
                onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.type === 'youtube' ? (item.thumbnail_url || item.file_url) : item.file_url} 
                alt={item.title} 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  {item.type === 'youtube' && <PlayCircle className="text-white w-12 h-12 opacity-80 group-hover:scale-110 transition-transform" />}
              </div>
              <div className="p-4">
                  <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
            <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors"
                >
                    <X size={32} />
                </button>
                <div className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center">
                    {selectedItem.type === 'youtube' ? (
                        <div className="w-full aspect-video">
                            <iframe 
                                src={selectedItem.file_url} 
                                title={selectedItem.title}
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        </div>
                    ) : (
                        <img 
                            src={selectedItem.file_url} 
                            alt={selectedItem.title} 
                            className="max-h-[70vh] rounded-lg shadow-2xl"
                        />
                    )}
                    <div className="mt-4 text-center text-white">
                        <h2 className="text-xl font-bold">{selectedItem.title}</h2>
                        <p className="text-slate-300 text-sm mt-2">{selectedItem.description}</p>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};
