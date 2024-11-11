import React from 'react';
import './index.css';

const Drop = ({ setNeedValue }) => {
    const handleChange = (event) => {
        setNeedValue(event.target.value);
    };


    return (
        <div className='flex flex-col md:flex-row items-center justify-center text-lg md:text-xl lg:text-l mb-3'>
            <label htmlFor="dropdown" className="ml-20 w-48 md:w-64 font-semibold text-gray-700 lg:text-l text-center md:text-left">
                Select your style:</label>
            <select id="dropdown"  onChange={handleChange} className="mr-9 w-full md:w-64 lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                <optgroup label="Choose your style">
                <option value="Fashion">Fashion</option>
                <option value="Electronics">Electronics</option>
                <option value="Beauty">Beauty</option>
                </optgroup>
            </select>

            
        </div>


       
    );
};

export default Drop;
