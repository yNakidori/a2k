import React from 'react';

const VideoComponent = ({ videoSrc, title, description }) => {
    return (
        <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden md:flex max-w-4xl">
            <div className="md:w-1/2">
                <video className="w-full h-full object-cover" controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
            </div>
        </div>
    );
};

export default VideoComponent;
