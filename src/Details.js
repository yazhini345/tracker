import React from 'react';
import './index.css';
import City from './City';
import Country from './Country';
import Drop from './Drop';
import State from './State';


const Details = () => {
    return (
        <div className="dropdowns">
            <Drop /><br />
            <Country /><br />
            <State /><br />
            <City /><br />

        </div> // Correctly close the div here
    );
};

export default Details;

