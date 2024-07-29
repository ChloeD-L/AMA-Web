import React from 'react';

export const RandomCollision: React.FC = () => {
    return (
        <div className="relative w-full h-screen bg-gray-100 overflow-hidden flex items-center justify-center" >
            <div className="absolute w-[20rem] h-[20rem] bg-blue-500 rounded-full animate-random-bounce blur-xl"></div>
            <div className="absolute w-[20rem] h-[20rem] bg-red-500 rounded-full animate-random-bounce blur-xl" style={{ animationDelay: '2.5s' }}></div>
        </div>
    )
}