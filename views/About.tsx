import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6 text-center">About Turks.pk</h1>
            <div className="prose prose-slate mx-auto text-slate-600 leading-relaxed">
                <p className="mb-4">
                    The Turk community in Pakistan shares a rich lineage, deeply intertwined with the history of South Asia. 
                    From the earliest migrations to the establishment of modern Pakistan, Turks have contributed to the cultural, 
                    political, and social fabric of the region.
                </p>
                <p className="mb-4">
                    <strong>Our Mission:</strong> To provide a unified digital platform that preserves our history, celebrates our culture, 
                    and connects the dispersed population of Turks across Pakistan.
                </p>
                <p>
                    <strong>Our Vision:</strong> A connected, educated, and thriving community that honors its past while building a prosperous future.
                </p>
            </div>
        </div>

        {/* Developer Info */}
        <div className="border-t border-slate-200 pt-12">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">Meet the Creator</h2>
            <div className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 h-64 md:h-auto bg-slate-200">
                     <img 
                        src="https://picsum.photos/id/1005/400/400" 
                        alt="Farhad Ali" 
                        className="w-full h-full object-cover"
                     />
                </div>
                <div className="w-full md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-slate-900">Farhad Ali</h3>
                    <p className="text-primary-600 font-medium mb-4">Lead Developer & Community Advocate</p>
                    <p className="text-slate-600 mb-6">
                        "This web app was created by the Turk Community Dev Team. My goal is to leverage technology to bridge gaps within our community."
                    </p>
                    <div className="space-y-1 text-sm text-slate-500">
                        <p><strong>Email:</strong> farhadaliturkofficial@gmail.com</p>
                        <p><strong>Role:</strong> Full Stack Engineer</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
