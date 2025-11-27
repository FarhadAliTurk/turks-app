import React, { useEffect, useState } from 'react';
import { getEvents } from '../services/supabaseService';
import { EventItem } from '../types';
import { MapPin, Calendar, Clock } from 'lucide-react';

export const Events: React.FC = () => {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Upcoming Events</h1>
          <p className="text-slate-600">Gatherings, celebrations, and important dates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative h-48">
                <img src={event.image_url} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg px-3 py-1 text-center shadow-lg">
                    <span className="block text-xs font-bold text-slate-500 uppercase">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                    <span className="block text-xl font-bold text-primary-700">{new Date(event.date).getDate()}</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-slate-500 text-sm">
                        <Calendar size={16} className="mr-2 text-primary-600" />
                        {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                        <MapPin size={16} className="mr-2 text-primary-600" />
                        {event.location}
                    </div>
                </div>
                
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                    {event.description}
                </p>

                <button className="w-full py-2 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors">
                    Event Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
