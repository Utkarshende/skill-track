import React, { useState, useCallback } from 'react';
import AlertBox from './components/Utility.jsx'; 
import Header from './components/Navigation.jsx';
import DashboardPage from './components/MainPage.jsx';
import Footer from './components/Footer.jsx';
import CatalogPage from './components/CatalogPage.jsx';

function App() {
    const [activePage, setActivePage] = useState('dashboard');
    const [alertMessage, setAlertMessage] = useState(null);
    const [userBio, setUserBio] = useState('A beginner web developer focusing on front-end skills.');


    const getNavLinkClasses = (pageId) => {
        const PRIMARY_COLOR = 'text-[#4f46e5]'; 
        const baseClasses = "nav-link hover:text-[#4f46e5] transition duration-200 py-1";
        
        if (activePage === pageId) {
            return `${baseClasses} ${PRIMARY_COLOR} border-b-2 border-[#4f46e5] font-bold`;
        }
        
        return `${baseClasses} text-gray-400`;
    };


    const renderPage = () => {
        switch (activePage) {
            case 'dashboard':
                return <DashboardPage setActivePage={setActivePage} />;
            case 'catalog':
                return <CatalogPage />;
            case 'profile':
                return (
                    <ProfilePage 
                        userBio={userBio} 
                        setUserBio={setUserBio} 
                        setActivePage={setActivePage}
                        showAppAlert={showAppAlert}
                    />
                );
            default:
                return <DashboardPage setActivePage={setActivePage} />;
        }
    };

    // JSX Structure
    return (
        <div className="text-gray-100 antialiased min-h-screen" 
            style={{
                fontFamily: 'Inter, sans-serif',
                background: 'linear-gradient(to bottom right, #030712, #0f172a)', 
            }}>

            {/* Custom Alert Message Box */}
            <AlertBox message={alertMessage} />

            {/* Header/Navigation Component */}
            <Header 
                activePage={activePage} 
                setActivePage={setActivePage} 
                getNavLinkClasses={getNavLinkClasses} 
            />

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Conditional Page Rendering (Rendered by renderPage helper) */}
                <div className="transition-opacity duration-500 opacity-100">
                    {renderPage()}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;