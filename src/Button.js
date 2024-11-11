import React from 'react';

const Button = ({ onSearch, onReset }) => {
    return (
        <div>
            <button className='bg-green-600 p-3 text-white font-semibold px-4 py-2 
            rounded-md border border-green-700 shadow-lg hover:bg-green-700 
            active:bg-green-700 mt-7 mr-4' 
            onClick={onSearch} > search </button>

            <button className='bg-red-600 p-3 text-white font-semibold px-5 py-2 
            rounded-md border border-green-700 shadow-lg hover:bg-red-700 
            active:bg-green-700 ml-5'  onClick={onReset}> reset </button>
        </div>
    );
};

export default Button;
