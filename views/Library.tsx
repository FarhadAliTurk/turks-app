import React, { useEffect, useState } from 'react';
import { getLibrary } from '../services/supabaseService';
import { LibraryItem } from '../types';
import { BookOpen, Download } from 'lucide-react';

export const Library: React.FC = () => {
  const [items, setItems] = useState<LibraryItem[]>([]);

  useEffect(() => {
    getLibrary().then(setItems);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Digital Library</h1>
          <p className="text-slate-600">Books, articles, and documents preserving our intellectual heritage.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                    src={book.cover_url} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                    {book.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 line-clamp-1 mb-1">{book.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{book.author}</p>
                <div className="flex gap-2">
                    <button className="flex-1 bg-primary-50 text-primary-700 hover:bg-primary-100 py-2 rounded text-sm font-medium flex items-center justify-center gap-1 transition-colors">
                        <BookOpen size={16} /> View
                    </button>
                    <button className="w-10 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded flex items-center justify-center transition-colors">
                        <Download size={16} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
