import React from 'react';

/**
 * Renders the content for the minimal Dashboard page.
 */
export default function Dashboard() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white mb-4">Dashboard Overview</h1>
            <p className="text-gray-300">This is a simplified view. Your current progress summary would typically load here.</p>
            <div className="bg-gray-700 p-4 rounded-lg text-sm">
                <p>Enrollments: 3</p>
                <p>Completion Rate: 50%</p>
            </div>
        </div>
    );
}