import React from 'react';
import './index.css';

const Checkbox = ({ setCheckbox }) => {
    const handleChange = (event) => {
        const { value, checked } = event.target;

        setCheckbox(prev => {
            if (checked) {
                // Add value if checked
                return [...prev, value]; // Ensure this returns an array
            } else {
                // Remove value if unchecked
                return prev.filter(checkbox => checkbox !== value); // Ensure this returns an array
            }
        });
    };

    return (
        <div className='mt-9 text-2xl'>
            <label className='ml-3'>Select your options:</label><br />
            <div className=''>
                 <input 
                    type="checkbox" 
                    id="future" 
                    value="Future" 
                    onChange={handleChange} 
                    className="w-5 h-5 ml-1"
                />
                <label htmlFor="future" className='ml-1'>Future</label>


                <input 
                    type="checkbox" 
                    id="latest" 
                    value="Latest" 
                    onChange={handleChange} 
                    className="w-5 h-5 ml-9 mt-6"

                />
                <label htmlFor="latest" className='ml-1'>Latest</label>

                <input 
                    type="checkbox" 
                    id="topRated" 
                    value="Top Rated" 
                    onChange={handleChange}
                    className="w-5 h-5 ml-9 mt-6"
                />
                <label htmlFor="topRated" className='ml-1'>Top Rated</label>
            </div>
        </div>
    );
};

export default Checkbox;
