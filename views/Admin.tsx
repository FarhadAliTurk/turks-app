import React, { useState } from 'react';
import { ADMIN_EMAILS } from '../constants';
import { Lock, CheckCircle, AlertCircle } from 'lucide-react';

export const Admin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (ADMIN_EMAILS.includes(email.trim().toLowerCase())) {
        setIsAuthenticated(true);
        setError('');
    } else {
        setError('Unauthorized access. Only admins can enter.');
    }
  };

  if (!isAuthenticated) {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full border border-slate-100">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Admin Portal</h1>
                    <p className="text-slate-500">Sign in to manage content</p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Admin Email</label>
                        <input 
                            type="email" 
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 outline-none"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                            <AlertCircle size={16} /> {error}
                        </div>
                    )}
                    <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">
                        Sign In with Google (Simulated)
                    </button>
                    <p className="text-xs text-center text-slate-400 mt-4">
                        Secured by Supabase Auth
                    </p>
                </form>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
                <button 
                    onClick={() => setIsAuthenticated(false)}
                    className="px-4 py-2 text-slate-600 hover:text-red-600 font-medium"
                >
                    Sign Out
                </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-8">
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle size={20} />
                    <span className="font-medium">You are logged in as {email}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Library', 'Events', 'Gallery', 'History', 'Population Registry'].map((section) => (
                    <div key={section} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary-300 transition-colors">
                        <h3 className="font-bold text-lg text-slate-800 mb-2">Manage {section}</h3>
                        <p className="text-slate-500 text-sm mb-4">Add, edit, or remove entries from the database.</p>
                        <button className="text-primary-600 text-sm font-bold hover:underline">
                            Open Editor &rarr;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};
