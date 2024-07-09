import React from 'react';

const DescriptionList = ({ items }) => (
    <ul className="list-disc pl-6 text-gray-700">
        {items.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
        ))}
    </ul>
);

const VideoComponent = ({ videoSrc, title, descriptions }) => {
    return (
        <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden md:flex max-w-8xl mx-auto">
            <div className="md:w-1/2">
                <video className="w-full h-full object-cover" controls>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <DescriptionList items={descriptions} />
                </div>
            </div>
        </div>
    );
};

export default VideoComponent;
