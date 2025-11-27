import React, { useState } from 'react';
import { submitContactForm } from '../services/supabaseService';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitContactForm(form);
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600">We'd love to hear from you. Send us a message.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <Mail className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                            <div>
                                <p className="font-medium text-slate-900">Email</p>
                                <p className="text-slate-600">contact@turks.pk</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="w-6 h-6 text-primary-600 mr-4 mt-1" />
                            <div>
                                <p className="font-medium text-slate-900">Location</p>
                                <p className="text-slate-600">Islamabad, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-primary-900 p-8 rounded-2xl text-white">
                    <h3 className="text-xl font-bold mb-4">Join the Team</h3>
                    <p className="text-primary-100 mb-6">
                        Are you a developer, writer, or historian from the community? We need your help to grow this platform.
                    </p>
                    <button className="bg-white text-primary-900 px-6 py-2 rounded-lg font-bold hover:bg-primary-50 transition-colors">
                        Volunteer Now
                    </button>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                        <input 
                            required
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                            value={form.name}
                            onChange={(e) => setForm({...form, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input 
                            required
                            type="email" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                        <textarea 
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                            value={form.message}
                            onChange={(e) => setForm({...form, message: e.target.value})}
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={status === 'success'}
                        className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
                            status === 'success' 
                            ? 'bg-green-600 cursor-default' 
                            : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-primary-600/30'
                        }`}
                    >
                        {status === 'success' ? 'Message Sent' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};
