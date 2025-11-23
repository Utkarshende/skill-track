import { useState } from "react";
import { X, CheckCircle } from 'lucide-react'; 

function ProfilePage() {
    const [userName, setUserName] = useState("Utkarsha Shende");
    const [userEmail, setUserEmail] = useState("utkarsha@123gmail.com");
    const [userCourse, setUserCourse] = useState("Full-Stack Developer");
    const [userMobile, setUserMobile] = useState("987-654-3210");
    
    const editableInputStyle = "w-full p-4 border border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-300 shadow-inner";
    
    const readOnlyStyle = "w-full p-4 border border-gray-700 rounded-xl bg-gray-900/50 text-gray-400 cursor-default shadow-inner";

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-950 p-6 font-sans">
            
            <div className="w-full max-w-xl bg-gray-900 p-8 sm:p-12 rounded-3xl shadow-2xl shadow-indigo-900/40 border border-gray-700">

                <h1 className="text-4xl font-extrabold mb-6 text-white border-b border-indigo-500/50 pb-3">
                    Utkarsha's Profile
                </h1>
                
                <p className="text-gray-400 mb-8">
                    View your personal details and current course enrollment.
                </p>
                
                <div className="space-y-6">
                    
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">Full Name</label>
                        <input type="text" id="name" value={userName} readOnly disabled
                            className={readOnlyStyle}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">Email Address</label>
                        <input type="email" id="email" value={userEmail} readOnly disabled
                            className={readOnlyStyle}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">Mobile Number</label>
                            <input type="tel" id="mobile" value={userMobile} readOnly disabled
                                className={readOnlyStyle}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">Course Enrolled</label>
                            <div className="flex space-x-3 items-center">
                                <div className={`${readOnlyStyle} flex-grow h-[56px] flex items-center p-4`} >
                                    {userCourse}
                                </div>
                                <button
                                    type="button"
                                    className="px-4 py-2 h-[56px] rounded-xl text-sm font-bold transition duration-300 
                                        bg-violet-700 hover:bg-violet-800 text-white shadow-md shadow-violet-700/30 whitespace-nowrap"
                                >
                                    Upgrade Course
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;