
function CatalogPage() {

    return (
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
    );
};


export default CatalogPage

