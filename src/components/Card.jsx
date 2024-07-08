import React from 'react';

const Card = ({ imageSrc, clientName, clientDescription }) => {
    return (
        <div className='bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3 lg:w-1/4 m-4' style={{ width: '300px' }}>
            <img src={imageSrc} alt={clientName} className='w-auto object-cover' style={{ height: '150px' }} />
            <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>{clientName}</h3>
                <p className='text-gray-700'>{clientDescription}</p>
            </div>
        </div>
    );
};

export default Card;
