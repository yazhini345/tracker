import React from 'react';
import './index.css';

const State = ({ setState, states,setCity}) => {
    const handleChange = (event) => {
        //setState(event.target.value === "Any" ? "" : event.target.value);
        const selectedState = event.target.value;

        setState(selectedState);

        if (selectedState === "Any") {
            setCity('');   // Reset city value
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center text-lg md:text-xl lg:text-l mb-3">
            <label htmlFor="state-dropdown" 
                className="mr-5 w-48 md:w-64 font-semibold text-gray-700 lg:text-l">
                Select your State:
            </label>
            <select id="state-dropdown" onChange={handleChange} className="ml-5 w-full md:w-64 lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
            <optgroup label="Select your city">
                <option value="Any">Any</option>


                {states.map((state) => (
                    <option key={state} value={state}>{state}</option>
                ))}
            </optgroup>
            </select>
        </div>
    );
}

export default State;
