import React, { useState, useEffect, useCallback } from 'react';

function AlertBox ({ message }){
    if (!message) return null;

    return (
        <div className="fixed top-4 right-4 bg-[#4f46e5] text-white p-4 rounded-xl shadow-2xl z-50 transition-transform duration-300 transform animate-pulse
                        text-sm sm:text-base font-semibold max-w-xs text-center">
            {message}
        </div>
    );
};
export default AlertBox