import React, { useState } from 'react';

// Main App Component - Default export is required for React projects
const App = () => {
    // State to manage the currently active page ('dashboard' is the initial page)
    const [activePage, setActivePage] = useState('dashboard');
    
    // State for the custom alert message
    const [alertMessage, setAlertMessage] = useState(null);

    // NEW STATE for profile simplification and bio management
    const [userBio, setUserBio] = useState('A beginner web developer focusing on front-end skills.');
    
    // Function to handle custom alert display
    const showAppAlert = (message) => {
        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage(null);
        }, 3000);
    };

    /**
     * Helper function to determine the Tailwind class for the navigation link
     * @param {string} pageId - The ID of the page link.
     * @returns {string} Tailwind classes for styling the link.
     */
    const getNavLinkClasses = (pageId) => {
        // Defining 'primary' color for navigation consistency (equivalent to indigo-600)
        const PRIMARY_COLOR = 'text-[#4f46e5]'; 
        const baseClasses = "nav-link hover:text-[#4f46e5] transition duration-200 py-1";
        if (activePage === pageId) {
            return `${baseClasses} ${PRIMARY_COLOR} border-b-2 border-[#4f46e5] font-bold`;
        }
        return `${baseClasses} text-gray-400`;
    };

    // --- JSX (HTML Structure) Starts Here ---
    return (
        <div className="text-gray-100 antialiased min-h-screen" 
             style={{
                fontFamily: 'Inter, sans-serif',
                // Updated background for better contrast
                background: 'linear-gradient(to bottom right, #030712, #0f172a)', 
             }}>

            {/* Custom Alert Message Box */}
            {alertMessage && (
                <div className="fixed top-4 right-4 bg-[#4f46e5] text-white p-4 rounded-xl shadow-2xl z-50 transition-transform duration-300 transform animate-pulse">
                    {alertMessage}
                </div>
            )}

            {/* Header and Navigation Component */}
            <header className="sticky top-0 z-20 bg-[#111827]/90 backdrop-blur-sm shadow-lg border-b border-gray-700/50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div 
                        className="text-3xl font-extrabold text-[#6366f1] cursor-pointer hover:text-[#4f46e5] transition" 
                        onClick={() => setActivePage('dashboard')}
                    >
                        DevTracker
                    </div>
                    
                    {/* Desktop Navigation Links - Now using onClick and dynamic class logic */}
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

                    <div className="md:hidden">
                        {/* SVG Icon for Menu */}
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* 1. DASHBOARD PAGE CONTAINER (Conditional Rendering) */}
                {activePage === 'dashboard' && (
                    <div className="transition-opacity duration-500 opacity-100">
                        <div className="p-6 sm:p-10 rounded-2xl">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">Developer Dashboard</h1>
                            
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {/* Stat Card 1 */}
                                <div className="bg-[#111827] p-5 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-xl hover:shadow-[#4f46e5]/20 transition duration-300 transform hover:-translate-y-0.5">
                                    <p className="text-sm font-medium text-gray-400">Courses Enrolled</p>
                                    <p className="text-3xl font-bold text-white mt-1">6</p>
                                    <p className="text-sm text-[#10b981] flex items-center mt-2">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                                        +2 Since last month
                                    </p>
                                </div>
                                {/* Stat Card 2 */}
                                <div className="bg-[#111827] p-5 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-xl hover:shadow-[#4f46e5]/20 transition duration-300 transform hover:-translate-y-0.5">
                                    <p className="text-sm font-medium text-gray-400">Total Completion</p>
                                    <p className="text-3xl font-bold text-white mt-1">45%</p>
                                    <p className="text-sm text-[#f59e0b] flex items-center mt-2">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        On Track
                                    </p>
                                </div>
                                {/* Stat Card 3 */}
                                <div className="bg-[#111827] p-5 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-xl hover:shadow-[#4f46e5]/20 transition duration-300 transform hover:-translate-y-0.5">
                                    <p className="text-sm font-medium text-gray-400">Hours Logged</p>
                                    <p className="text-3xl font-bold text-white mt-1">128</p>
                                    <p className="text-sm text-gray-500 mt-2">Total study time</p>
                                </div>
                                 {/* Stat Card 4 */}
                                <div className="bg-[#111827] p-5 rounded-xl shadow-lg border border-gray-700/50 hover:shadow-xl hover:shadow-[#4f46e5]/20 transition duration-300 transform hover:-translate-y-0.5">
                                    <p className="text-sm font-medium text-gray-400">Next Milestone</p>
                                    <p className="text-3xl font-bold text-white mt-1">JavaScript</p>
                                    <p className="text-sm text-[#4f46e5] mt-2">Finish Module 4</p>
                                </div>
                            </div>

                            {/* Progress Section */}
                            <div className="bg-[#111827] p-6 sm:p-8 rounded-2xl shadow-xl shadow-gray-900/50 border border-gray-700/50">
                                <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700/50 pb-3">Your Progress Snapshot</h2>

                                <div className="space-y-6">
                                    {/* Progress Bar 1: HTML & CSS */}
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">HTML & CSS Fundamentals</span>
                                            <span className="text-[#4f46e5] font-bold">90%</span>
                                        </div>
                                        <div className="w-full bg-[#1f2937] rounded-full h-3">
                                            <div className="progress-bar-fill bg-[#10b981] h-3 rounded-full" style={{width: '90%'}}></div>
                                        </div>
                                    </div>

                                    {/* Progress Bar 2: JavaScript */}
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">JavaScript & DOM Manipulation</span>
                                            <span className="text-[#4f46e5] font-bold">45%</span>
                                        </div>
                                        <div className="w-full bg-[#1f2937] rounded-full h-3">
                                            <div className="progress-bar-fill bg-[#4f46e5] h-3 rounded-full" style={{width: '45%'}}></div>
                                        </div>
                                    </div>

                                    {/* Progress Bar 3: Backend Concepts */}
                                    <div>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-medium">Backend & API Integration</span>
                                            <span className="text-[#4f46e5] font-bold">15%</span>
                                        </div>
                                        <div className="w-full bg-[#1f2937] rounded-full h-3">
                                            <div className="progress-bar-fill bg-[#f59e0b] h-3 rounded-full" style={{width: '15%'}}></div>
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    className="mt-8 px-6 py-3 bg-[#6366f1] text-white font-semibold rounded-lg shadow-lg hover:bg-[#4f46e5] transition duration-300 transform hover:scale-[1.02]"
                                    onClick={() => setActivePage('catalog')}
                                >
                                    Explore New Courses &rarr;
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. CATALOG PAGE CONTAINER (Conditional Rendering) */}
                {activePage === 'catalog' && (
                    <div className="transition-opacity duration-500 opacity-100">
                        <div className="p-6 sm:p-10 rounded-2xl">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">Course Catalog</h1>
                            <p className="text-gray-400 text-lg mb-10 max-w-3xl">Find and enroll in new learning paths to advance your skills.</p>

                            {/* Course Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                                
                                {/* Course Card 1 */}
                                <div className="group bg-[#111827] p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-[#10b981] transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#10b981]/20 text-[#10b981]">Advanced</span>
                                    <h3 className="text-2xl font-semibold text-white mt-3 mb-2 group-hover:text-[#10b981] transition duration-300">Modern CSS with Tailwind</h3>
                                    <p className="text-gray-400 text-sm">Master utility-first design, custom configurations, and complex component creation.</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-lg font-bold text-[#4f46e5]">4 Weeks</span>
                                        <button className="px-4 py-2 text-sm bg-[#4f46e5] rounded-full hover:bg-[#6366f1] transition duration-200">View Course</button>
                                    </div>
                                </div>

                                {/* Course Card 2 */}
                                <div className="group bg-[#111827] p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-[#4f46e5] transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#4f46e5]/20 text-[#4f46e5]">Core</span>
                                    <h3 className="text-2xl font-semibold text-white mt-3 mb-2 group-hover:text-[#4f46e5] transition duration-300">JavaScript Essentials</h3>
                                    <p className="text-gray-400 text-sm">A deep dive into ES6+, asynchronous programming, and DOM manipulation.</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-lg font-bold text-[#4f46e5]">6 Weeks</span>
                                        <button className="px-4 py-2 text-sm bg-[#4f46e5] rounded-full hover:bg-[#6366f1] transition duration-200">View Course</button>
                                    </div>
                                </div>
                                
                                {/* Course Card 3 */}
                                <div className="group bg-[#111827] p-6 rounded-xl shadow-lg border border-gray-700/50 hover:border-[#f59e0b] transition duration-300 transform hover:-translate-y-1 cursor-pointer">
                                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#f59e0b]/20 text-[#f59e0b]">Beginner</span>
                                    <h3 className="text-2xl font-semibold text-white mt-3 mb-2 group-hover:text-[#f59e0b] transition duration-300">Node.js for Beginners</h3>
                                    <p className="text-gray-400 text-sm">Introduction to server-side development, express framework, and APIs.</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-lg font-bold text-[#4f46e5]">8 Weeks</span>
                                        <button className="px-4 py-2 text-sm bg-[#4f46e5] rounded-full hover:bg-[#6366f1] transition duration-200">View Course</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. PROFILE PAGE CONTAINER (Conditional Rendering) - HEAVILY STYLED */}
                {activePage === 'profile' && (
                    <div className="transition-opacity duration-500 opacity-100">
                        <div className="bg-[#111827] p-6 sm:p-10 rounded-2xl shadow-2xl shadow-gray-900/80 border border-gray-700/50">
                            
                            {/* Enhanced Header with Icon */}
                            <div className="flex items-center mb-6">
                                {/* User Icon (lucide-react equivalent) */}
                                <svg className="w-10 h-10 text-[#6366f1] mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Your Profile</h1>
                            </div>

                            <p className="text-gray-400 text-lg mb-10 max-w-3xl border-b border-gray-700/50 pb-6">
                                Update your public profile information below.
                            </p>

                            {/* Profile Form (SIMPLIFIED & STYLED) */}
                            <form className="max-w-2xl mx-auto space-y-8">
                                
                                {/* Username Field - Read-only styling */}
                                <div className="space-y-4">
                                    <label htmlFor="username" className="block text-sm font-bold text-gray-300 mb-1">Username (Immutable)</label>
                                    <input type="text" id="username" defaultValue="dev_user_01" disabled 
                                           className="mt-1 block w-full p-4 border border-gray-600 rounded-xl shadow-inner bg-[#1f2937]/70 text-gray-500 font-mono cursor-not-allowed"/>
                                </div>
                                
                                {/* Bio Field, now using state - Premium Textarea Styling */}
                                <div className="space-y-4">
                                    <label htmlFor="bio" className="block text-sm font-bold text-gray-300 mb-1">Bio (Max 150 chars)</label>
                                    <textarea 
                                        id="bio" 
                                        rows="4" 
                                        value={userBio}
                                        onChange={(e) => setUserBio(e.target.value)}
                                        className="mt-1 block w-full p-4 border-2 border-gray-600 rounded-xl shadow-xl bg-[#1f2937] text-white
                                                     focus:ring-4 focus:ring-[#6366f1]/50 focus:border-[#6366f1] outline-none transition duration-300">
                                    </textarea>
                                </div>
                                
                                {/* Save Button - Gradient, Strong Shadow, and Hover Effect */}
                                <button type="button" 
                                        onClick={() => {
                                            setActivePage('dashboard'); 
                                            showAppAlert('Profile updated successfully! Returning to Dashboard.');
                                        }}
                                        className="w-full py-4 text-white text-lg font-extrabold rounded-xl transition duration-500 
                                                   bg-gradient-to-r from-[#4f46e5] to-[#6366f1] 
                                                   shadow-2xl shadow-[#4f46e5]/40
                                                   hover:from-[#6366f1] hover:to-[#4f46e5] 
                                                   hover:scale-[1.02] hover:shadow-primary-lg 
                                                   focus:ring-4 focus:ring-[#4f46e5]/70 focus:outline-none">
                                    SAVE PROFILE
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </main>

            {/* Simple Footer */}
            <footer className="bg-[#111827] border-t border-gray-700/50">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                    DevTracker Demo &bull; Dashboard Built with React & Tailwind CSS.
                </div>
            </footer>
        </div>
    );
};

export default App;