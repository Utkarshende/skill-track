
function CatalogPage() {

    const courses = [
    { 
        id: 1,
        level: "Advanced", 
        title: "Modern CSS with Tailwind", 
        description: "Master utility-first design, custom configurations, and complex component creation.", 
        duration: "4 Weeks", 
        levelColor: 'text-[#10b981]',
        bgColor: 'bg-[#10b981]/20',
        borderColor: 'hover:border-[#10b981]',
    },
    { 
        id: 2,
        level: "Core", 
        title: "JavaScript Essentials", 
        description: "A deep dive into ES6+, asynchronous programming, and DOM manipulation.", 
        duration: "6 Weeks", 
        levelColor: 'text-[#4f46e5]',
        bgColor: 'bg-[#4f46e5]/20',
        borderColor: 'hover:border-[#4f46e5]',
    },
    { 
        id: 3,
        level: "Beginner", 
        title: "Node.js for Beginners", 
        description: "Introduction to server-side development, express framework, and APIs.", 
        duration: "8 Weeks", 
        levelColor: 'text-[#f59e0b]',
        bgColor: 'bg-[#f59e0b]/20',
        borderColor: 'hover:border-[#f59e0b]',
    },
   
];


const CourseCard = ({ course }) => {
    return (
        <div 
            className={`group bg-[#111827] p-6 rounded-xl shadow-lg border border-gray-700/50 ${course.borderColor} transition duration-300 transform hover:-translate-y-1 cursor-pointer`}
        >
            <span 
                className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${course.bgColor} ${course.levelColor}`}
            >
                {course.level}
            </span>
            
            <h3 
                className={`text-2xl font-semibold text-white mt-3 mb-2 transition duration-300 group-hover:${course.levelColor.replace('text-', 'text-')}`}
            >
                {course.title}
            </h3>
            
            <p className="text-gray-400 text-sm">{course.description}</p>
            
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
                <span className="text-lg font-bold text-indigo-400">{course.duration}</span>
                <button 
                    className="px-4 py-2 text-sm text-white bg-indigo-600 rounded-full shadow-md hover:bg-indigo-500 transition duration-200"
                >
                    View Course
                </button>
            </div>
        </div>
    );
};

    return (
        <div className="p-6 sm:p-10 max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">Course Catalog</h1>
            <p className="text-gray-400 text-xl mb-12 max-w-3xl border-b border-gray-700/50 pb-6">
                Find and enroll in new learning paths to advance your skills.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};


export default CatalogPage

