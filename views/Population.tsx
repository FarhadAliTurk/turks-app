import React, { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { getPopulationData, registerPopulation } from '../services/supabaseService';
import { PopulationData } from '../types';

const COLORS = ['#0f766e', '#14b8a6', '#2dd4bf', '#5eead4', '#99f6e4', '#ccfbf1', '#f0fdfa'];

export const Population: React.FC = () => {
  const [data, setData] = useState<PopulationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', city: '', notes: '' });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    getPopulationData().then(d => {
      setData(d);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerPopulation(formData);
    setSubmitStatus('success');
    setFormData({ name: '', city: '', notes: '' });
  };

  const totalPopulation = data.reduce((acc, curr) => acc + curr.population, 0);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Population Demographics</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
                Understanding the distribution of the Turk community across Pakistan.
                <br />
                <span className="text-xs text-slate-400 italic">Numbers are approximate and based on publicly available sources.</span>
            </p>
        </div>

        {loading ? (
            <div className="flex justify-center h-64 items-center text-primary-600">Loading Visualization...</div>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 mb-6">Province-wise Distribution</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="region" tick={{fontSize: 12}} interval={0} angle={-15} textAnchor="end" height={60} />
                                <YAxis />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    cursor={{fill: '#f0fdfa'}}
                                />
                                <Bar dataKey="population" fill="#0f766e" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                     <h3 className="text-lg font-bold text-slate-800 mb-2">Regional Share</h3>
                     <div className="text-3xl font-bold text-primary-700 mb-6">{totalPopulation.toLocaleString()} <span className="text-sm font-normal text-slate-500">Est. Total</span></div>
                    <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={2}
                                    dataKey="population"
                                    nameKey="region"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend iconType="circle" wrapperStyle={{fontSize: '12px', paddingTop: '10px'}}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        )}

        {/* Self Registration Section */}
        <div className="bg-primary-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold mb-4">Be Counted. Join the Registry.</h2>
                    <p className="text-primary-100 mb-8 leading-relaxed">
                        Help us maintain an accurate record of our community strength. Your data helps in organizing events and allocating resources.
                        <br/><span className="text-sm opacity-70 mt-2 block">Data is securely stored in Supabase.</span>
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-primary-100">Full Name</label>
                        <input 
                            required
                            type="text" 
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-400"
                            placeholder="e.g. Ali Turk"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-primary-100">City / Province</label>
                        <input 
                            required
                            type="text" 
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-400"
                            placeholder="e.g. Lahore, Punjab"
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-primary-100">Additional Notes (Optional)</label>
                        <textarea 
                            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-primary-400 h-20"
                            placeholder="Family details..."
                            value={formData.notes}
                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full py-3 bg-white text-primary-900 font-bold rounded-lg hover:bg-primary-50 transition-colors"
                    >
                        {submitStatus === 'success' ? 'Submitted Successfully!' : 'Register Information'}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};
