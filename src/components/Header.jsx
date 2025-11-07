import React from 'react';

/**
 * Renders the main navigation header.
 * @param {object} props - Component props
 * @param {string} props.activePage - The currently active page ID.
 * @param {function} props.setActivePage - Function to change the active page.
 */
export default function Header({ activePage, setActivePage }) {
    
    // Moved styling logic inside the component to eliminate the prop dependency
    const getNavLinkClasses = (pageId) => {
        const PRIMARY_COLOR = 'text-[#4f46e5]'; 
        const baseClasses = "nav-link hover:text-[#4f46e5] transition duration-200 py-1";
        if (activePage === pageId) {
            return `${baseClasses} ${PRIMARY_COLOR} border-b-2 border-[#4f46e5] font-bold`;
        }
        return `${baseClasses} text-gray-400`;
    };
    
    return (
        <header className="sticky top-0 z-20 bg-[#111827]/90 backdrop-blur-sm shadow-lg border-b border-gray-700/50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div 
                    className="text-3xl font-extrabold text-[#6366f1] cursor-pointer hover:text-[#4f46e5] transition" 
                    onClick={() => setActivePage('dashboard')}
                >
                    DevTracker
                </div>
                
                <div className="hidden md:flex space-x-8 font-medium">
                    {/* The function call is now simplified and uses the local helper */}
                    <a href="#dashboard" className={getNavLinkClasses('dashboard')} onClick={() => setActivePage('dashboard')}>Dashboard</a>
                    <a href="#catalog" className={getNavLinkClasses('catalog')} onClick={() => setActivePage('catalog')}>Catalog</a>
                    <a href="#profile" className={getNavLinkClasses('profile')} onClick={() => setActivePage('profile')}>Profile</a>
                </div>

                <div className="md:hidden">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </div>
            </nav>
        </header>
    );
}