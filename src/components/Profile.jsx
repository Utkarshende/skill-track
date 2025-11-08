import { useState } from "react";
import { X, CheckCircle } from 'lucide-react'; 

// Profile Page Component (Premium Dark Theme Styling)
function ProfilePage() {
    // State for new fields
    const [userName, setUserName] = useState("Jane Doe");
    const [userEmail, setUserEmail] = useState("jane.doe@example.com");
    const [userCourse, setUserCourse] = useState("Web Development");
    const [userMobile, setUserMobile] = useState("555-123-4567");
    
    // Existing states
    const [userBio, setUserBio] = useState("Aspiring developer focusing on clean code and component reusability.");
    const [saveMessage, setSaveMessage] = useState({ text: '', type: '' });
    const MAX_LENGTH = 150;

    // Handler for the Save button click
    const handleSave = () => {
        setSaveMessage({ text: '', type: '' });

        // Basic validation check (only for Bio length in this simulation)
        if (userBio.length > MAX_LENGTH) {
            setSaveMessage({ text: `Error: Bio exceeds ${MAX_LENGTH} characters.`, type: 'error' });
            return;
        }

        // Simulate successful save (in a real app, you'd save all states to a database here)
        console.log("Saving Profile Data:", { userName, userEmail, userCourse, userMobile, userBio });
        setSaveMessage({ text: 'Profile updated successfully!', type: 'success' });
    };

    const isError = saveMessage.type === 'error';
    
    // Common styles for input/select fields (adapted for dark background)
    const inputStyle = "w-full p-4 border border-gray-700 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-300 shadow-inner";


    return (
        // Dark, deep background for contrast
        <div className="flex justify-center items-center min-h-screen bg-gray-950 p-6 font-sans">
            
            {/* Premium Dark Card Styling */}
            <div className="w-full max-w-xl bg-gray-900 p-8 sm:p-12 rounded-3xl shadow-2xl shadow-indigo-900/40 border border-gray-700">

                <h1 className="text-4xl font-extrabold mb-6 text-white border-b border-indigo-500/50 pb-3">
                    Edit Your Profile
                </h1>
                
                <p className="text-gray-400 mb-8">
                    Update your professional and contact details below.
                </p>

                {/* Enhanced Dark Alert Message */}
                {saveMessage.text && (
                    <div className={`p-4 mb-8 rounded-lg flex items-start text-sm transition duration-300 ${
                        isError 
                        ? 'bg-red-900/40 text-red-300 border border-red-700 font-semibold' 
                        : 'bg-green-900/40 text-green-300 border border-green-700 font-semibold'
                    }`}>
                        {isError 
                            ? <X className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" /> 
                            : <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />}
                        <p>{saveMessage.text}</p>
                    </div>
                )}
                
                <div className="space-y-6">
                    
                    {/* Full Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">Full Name</label>
                        <input type="text" id="name" value={userName} onChange={(e) => setUserName(e.target.value)}
                            className={inputStyle}
                            placeholder="e.g., Jane Doe"
                        />
                    </div>
                    
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">Email Address</label>
                        <input type="email" id="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
                            className={inputStyle}
                            placeholder="e.g., jane@example.com"
                        />
                    </div>

                    {/* Mobile and Course (Side-by-Side on wide screens) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Mobile Number Field */}
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">Mobile Number</label>
                            <input type="tel" id="mobile" value={userMobile} onChange={(e) => setUserMobile(e.target.value)}
                                className={inputStyle}
                                placeholder="e.g., 555-123-4567"
                            />
                        </div>

                        {/* Course Interested Field (Select) */}
                        <div>
                            <label htmlFor="course" className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">Course Interested</label>
                            <select id="course" value={userCourse} onChange={(e) => setUserCourse(e.target.value)}
                                // Increased height for better alignment and appearance-none for clean styling
                                className={`${inputStyle} appearance-none h-[56px]`} 
                            >
                                <option className="bg-gray-800" value="Web Development">Web Development</option>
                                <option className="bg-gray-800" value="Data Science">Data Science</option>
                                <option className="bg-gray-800" value="Cloud Computing">Cloud Computing</option>
                                <option className="bg-gray-800" value="Mobile App Dev">Mobile App Dev</option>
                                <option className="bg-gray-800" value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* Bio Field Group */}
                    <div>
                        <label htmlFor="bio" className="block text-sm font-semibold mb-2 text-indigo-400 uppercase tracking-wider">
                            Professional Bio
                            <span className={`float-right text-xs font-normal ${userBio.length > MAX_LENGTH ? 'text-red-500' : 'text-gray-500'}`}>
                                {userBio.length}/{MAX_LENGTH} characters
                            </span>
                        </label>
                        <textarea
                            id="bio"
                            rows="5"
                            value={userBio}
                            onChange={(e) => {
                                setUserBio(e.target.value);
                                setSaveMessage({ text: '', type: '' });
                            }}
                            className={inputStyle + " resize-none"}
                            maxLength={MAX_LENGTH}
                            placeholder="Describe your current goals or professional focus..."
                        />
                    </div>

                    {/* Save Button with Gradient and Hover Effect */}
                    <button
                        type="button"
                        onClick={handleSave}
                        className="w-full py-4 rounded-xl text-white text-lg font-bold transition duration-300 
                            bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800
                            shadow-lg shadow-indigo-600/50 hover:shadow-xl hover:scale-[1.005]
                            disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                        disabled={userBio.length > MAX_LENGTH}
                    >
                        SAVE PROFILE DETAILS
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;