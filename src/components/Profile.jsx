import React from 'react';

/**
 * Renders the content for the minimal Profile page (no state/save logic).
 */
export default function Profile() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-white mb-4">User Profile</h1>
            <p className="text-gray-300">Edit your static profile information below.</p>

            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                    <input type="text" id="name" defaultValue="Jane Doe" 
                           className="mt-1 block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                    <input type="email" id="email" defaultValue="jane@example.com" disabled
                           className="mt-1 block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed"/>
                </div>
            </div>
            
            <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                Save (No Logic)
            </button>
        </div>
    );
}