import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShieldCheck, Github, Facebook, Youtube } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer gap-3"
              onClick={() => navigate('/')}
            >
              <img 
                src="https://ui-avatars.com/api/?name=Turks+Pk&background=0f766e&color=fff&size=128&bold=true" 
                alt="Turks.pk Logo" 
                className="h-10 w-10 rounded-lg shadow-sm"
              />
              <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-primary-800' : 'text-primary-900'}`}>
                Turks.pk
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1 lg:space-x-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink 
                to="/admin"
                className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive ? 'text-primary-700' : 'text-slate-400 hover:text-primary-600'
                    }`
                }
              >
                <ShieldCheck size={16} />
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink to="/admin" className="block px-3 py-2 text-base font-medium text-slate-400">Admin</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://ui-avatars.com/api/?name=Turks+Pk&background=0f766e&color=fff&size=128&bold=true" 
                  alt="Turks.pk Logo" 
                  className="h-10 w-10 rounded-lg shadow-sm"
                />
                <h3 className="text-2xl font-serif font-bold text-white">Turks.pk</h3>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                Connecting the Turk community in Pakistan through history, culture, and unity. A platform for preservation and progress.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/library" className="hover:text-primary-400">Library</NavLink></li>
                <li><NavLink to="/events" className="hover:text-primary-400">Events</NavLink></li>
                <li><NavLink to="/history" className="hover:text-primary-400">History</NavLink></li>
                <li><NavLink to="/about" className="hover:text-primary-400">About Us</NavLink></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">Email: contact@turks.pk</p>
              <p className="text-sm">Islamabad, Pakistan</p>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer text-white" aria-label="Facebook">
                    <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer text-white" aria-label="YouTube">
                    <Youtube size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer text-white" aria-label="WhatsApp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 1h4a.5.5 0 0 0 1-1v-1" />
                    </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Turks.pk. All rights reserved.</p>
            <p className="flex items-center gap-1">
               Developed by <span className="text-primary-400">Turk Community Dev Team / Farhad Ali</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};