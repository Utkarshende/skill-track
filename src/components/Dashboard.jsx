import React from 'react';
import { BookOpen, ArrowUp, Clock, Zap, Home } from 'lucide-react'; 

function Dashboard() {

    const dashboardStats = [
        { title: "Courses Enrolled", value: "6", detail: "+2 Since last month", detailColor: 'text-[#10b981]', icon: BookOpen },
        { title: "Total Completion", value: "45%", detail: "On Track", detailColor: 'text-[#f59e0b]', icon: Clock },
        { title: "Hours Logged", value: "128", detail: "Total study time", detailColor: 'text-gray-500', icon: Zap },
        { title: "Next Milestone", value: "JavaScript", detail: "Finish Module 4", detailColor: 'text-[#4f46e5]', icon: Home },
    ];

    const dashboardProgressItems = [
        { title: "HTML & CSS Fundamentals", percentage: 90, barColor: 'bg-[#10b981]' },
        { title: "JavaScript & DOM Manipulation", percentage: 45, barColor: 'bg-[#4f46e5]' },
        { title: "Backend & API Integration", percentage: 15, barColor: 'bg-[#f59e0b]' },
    ];

    const handleNavigation = (target) => {
        console.log(`Simulating navigation to ${target}. (Router not available)`);
    };

    return (
        <div className="p-6 sm:p-10 max-w-7xl mx-auto bg-gray-900 min-h-screen">
            <h1 className="text-5xl font-extrabold text-white mb-10 text-center border-b-4 border-indigo-600/50 pb-4">
                Utkasrha's Learning Dashboard
            </h1>
       
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {dashboardStats.map((stat, index) => (
                    <div 
                        key={index}
                        className="bg-[#1f2937] p-6 rounded-2xl shadow-2xl border border-gray-700/50 transform hover:scale-[1.01] transition duration-500"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-lg font-medium text-gray-400">{stat.title}</p>
                            {stat.icon && <stat.icon className="w-6 h-6 text-indigo-400" />}
                        </div>
                        <p className="text-4xl font-black text-white mt-1">{stat.value}</p>
                        <p className={`text-base flex items-center mt-3 font-semibold ${stat.detailColor}`}>
                            {stat.detail.includes('+') && <ArrowUp className="w-4 h-4 mr-1"/>}
                            {stat.detail}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-[#111827] p-8 rounded-3xl shadow-3xl shadow-indigo-900/50 border border-gray-700/50">
                <h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-600 pb-4">
                    My Current Learning Progress
                </h2>

                <div className="space-y-8">
                    {dashboardProgressItems.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center mb-2 text-white">
                                <span className="text-lg font-medium">{item.title}</span>
                                <span className="text-xl text-[#6366f1] font-extrabold">{item.percentage}%</span>
                            </div>
                            <div className="w-full bg-[#1f2937] rounded-full h-4 shadow-inner">
                                <div 
                                    className={`h-4 rounded-full transition-all duration-1000 ${item.barColor}`} 
                                    style={{ width: `${item.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;