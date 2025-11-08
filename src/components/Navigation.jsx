 import { useState } from 'react';
 
function Header ({ activePage, setActivePage, getNavLinkClasses }) {
    // Simple state for mobile menu open/close (not implemented but reserved)
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <header className="sticky top-0 z-20 bg-[#111827]/90 backdrop-blur-sm shadow-lg border-b border-gray-700/50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                
                {/* Logo/App Name */}
                <div 
                    className="text-3xl font-extrabold text-[#6366f1] cursor-pointer hover:text-[#4f46e5] transition" 
                    onClick={() => setActivePage('dashboard')}
                >
                    DevTracker
                </div>
                
                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-8 font-medium">
                    <a 
                        href="#dashboard" 
                        className={getNavLinkClasses('dashboard')} 
                        onClick={() => setActivePage('dashboard')}
                    >
                        Dashboard
                    </a>
                    <a 
                        href="#catalog" 
                        className={getNavLinkClasses('catalog')} 
                        onClick={() => setActivePage('catalog')}
                    >
                        Catalog
                    </a>
                    <a 
                        href="#profile" 
                        className={getNavLinkClasses('profile')} 
                        onClick={() => setActivePage('profile')}
                    >
                        Profile
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <button 
                    className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </nav>
            
            {/* Mobile Navigation Dropdown (Basic implementation) */}
            {isMenuOpen && (
                <div className="md:hidden pb-4 px-4 space-y-2 bg-[#0f172a]">
                    {['dashboard', 'catalog', 'profile'].map(page => (
                        <a 
                            key={page}
                            href={`#${page}`}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition ${getNavLinkClasses(page)}`}
                            onClick={() => {
                                setActivePage(page);
                                setIsMenuOpen(false);
                            }}
                        >
                            {page.charAt(0).toUpperCase() + page.slice(1)}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;