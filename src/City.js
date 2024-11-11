/*import React from 'react';

const City = ({ setCity, cities }) => {
    const handleChange = (event) => {
        setCity(event.target.value); // Update the selected city
    };

    return (
        
        <div className=' text-xl ml-4 sm:ml-2 md:ml-4 lg:text-4xl xl:text-lg'>
            <label htmlFor="city-dropdown" className='text-l ml-4 sm:ml-2 md:ml-4 lg:text-4xl xl:text-lg w-64'>Select your city:</label>
            <select id="city-dropdown" onChange={handleChange}>
            <optgroup label="Select your city">
                <option value="Any">Any</option>

                {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                ))}
            </optgroup>
            </select>
        </div>
    );
}

export default City;




import React from 'react';

const City = ({ setCity, cities }) => {
    const handleChange = (event) => {
        setCity(event.target.value); // Update the selected city
    };

    return (
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-lg md:text-xl lg:text-2xl ">
            <label 
                htmlFor="city-dropdown" 
                className="ml-3 w-48 md:w-64 font-semibold text-gray-700 lg:text-l"
            >
                Select your city:
            </label>
            <select
                id="city-dropdown"
                onChange={handleChange}
                className="ml-3 w-full md:w-64 lg:w-80 p-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
                <optgroup label="Select your city">
                    <option value="Any">Any</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </optgroup>
            </select>
        </div>
    );
}

export default City;
*/


import React from 'react';

const City = ({ setCity, cities }) => {
    const handleChange = (event) => {
        setCity(event.target.value === "Any" ? "" : event.target.value);


    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center text-lg md:text-xl lg:text-l ml-10">
            <label
                htmlFor="city-dropdown"
                className="ml-10 w-48 md:w-64 font-semibold text-gray-700 lg:text-l text-center md:text-left"
            >
                Select your city:
            </label>
            <select
                id="city-dropdown"
                onChange={handleChange}
                className="mr-9 w-full md:w-64 lg:w-80 p-2 mt-2 md:mt-0 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            >
                <optgroup label="Select your city">
                    <option value="Any">Any</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </optgroup>
            </select>
        </div>
    );
};

export default City;
    