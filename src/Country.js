import React from 'react';
import './index.css';

const Country = ({ setCountry, setState, setCity }) => {
    const handleChange = (event) => {
        const selectedCountry = event.target.value;
        setCountry(selectedCountry);

        // If "Any" is selected for country, reset state and city
        if (selectedCountry === "Any") {
            setState('Any');  // Reset state to "Any"
            setCity('Any');   // Reset city to "Any"
        } else {
            setState('');  // Clear state if a specific country is selected
            setCity('');   // Clear city if a specific country is selected
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center text-lg md:text-xl lg:text-l mb-3">
            <label htmlFor="dropdown" className="ml-3 w-48 md:w-64 font-semibold text-gray-700 lg:text-l">
                Select your country:</label>
                <select 
                    id="dropdown"  
                    onChange={handleChange}  
                    className="ml-7 w-full md:w-64 lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                <optgroup label="Choose your style">
                    <option value="Any">Any</option>

                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Pakistan">Pakistan</option>
                </optgroup>
            </select>
            
        </div>
    );
};

export default Country;

/*
import React from 'react';
import './index.css';

const Country = ({ setCountry }) => {
    const handleChange = (event) => {
        // If "Any" is selected, set country to an empty string
        setCountry(event.target.value === "Any" ? "" : event.target.value);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center text-lg md:text-xl lg:text-l mb-3">
            <label htmlFor="dropdown" className="ml-3 w-48 md:w-64 font-semibold text-gray-700 lg:text-l">
                Select your country:
            </label>
            <select 
                id="dropdown"  
                onChange={handleChange}  
                className="ml-7 w-full md:w-64 lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                <optgroup label="Choose your style">
                    <option value="Any">Any</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Pakistan">Pakistan</option>
                </optgroup>
            </select>
        </div>
    );
};

export default Country;


import React from 'react';
import './index.css';

const Country = ({ setCountry }) => {
    const handleChange = (event) => {
        const selectedCountry = event.target.value === "Any" ? "" : event.target.value;
        setCountry(selectedCountry);



    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center text-lg md:text-xl lg:text-l mb-3">
            <label htmlFor="dropdown" className="ml-3 w-48 md:w-64 font-semibold text-gray-700 lg:text-l">
                Select your country:
            </label>
            <select 
                id="dropdown"  
                onChange={handleChange}  
                className="ml-7 w-full md:w-64 lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
                <optgroup label="Choose your style">
                    <option value="Any">Any</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Pakistan">Pakistan</option>
                </optgroup>
            </select>
        </div>
    );
};

export default Country;
*/
