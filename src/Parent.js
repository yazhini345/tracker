import React, { useState, useEffect, useCallback } from 'react';
import Column from './Column';
import Drop from './Drop';
import Country from './Country';
import City from './City';
import State from './State';
import Week from './Week';
import Checkbox from './Checkbox';
import Button from './Button';

const Parent = () => {
    const [needValue, setNeedValue] = useState('Fashion'); // Default value
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [selectedWeek, setSelectedWeek] = useState(3); // Default value
    const [checkbox, setCheckbox] = useState([]);
    const [names, setNames] = useState([]);
    const [filteredNames, setFilteredNames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const statesByCountry = {
        Nepal: ["Province 1", "Province 2", "Gandaki", "Bagmati", "Province 5", "Karnali", "Sudurpashchim"],
        Bhutan: ["Thimphu", "Punakha", "Paro", "Bumthang", "Chhukha"],
        Pakistan: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Gilgit-Baltistan", "Azad Kashmir"],
    };

    const citiesByState = {
        "Province 1": ["Biratnagar", "Dharan", "Itahari"],
        "Province 2": ["Janakpur", "Birgunj", "Rajbiraj"],
        "Gandaki": ["Pokhara", "Baglung", "Gorkha"],
        "Bagmati": ["Kathmandu", "Lalitpur", "Bhaktapur"],
        "Province 5": ["Butwal", "Bhairahawa", "Dang"],
        "Karnali": ["Birendranagar", "Jumla", "Rukum"],
        "Sudurpashchim": ["Dhangadhi", "Mahendranagar", "Dipayal"],
        Thimphu: ["Changangkha", "Motithang", "Lungtenphu"],
        Punakha: ["Guma", "Lingmukha", "Talo"],
        Paro: ["Drugyel Dzong", "Shari", "Tsento"],
        Bumthang: ["Bumthang", "Chokhor", "Ura", "Tang"],
        Chhukha: ["Bumthang", "Jakar", "Trashigang", "Gelephu"],
        Punjab: ["Lahore", "Faisalabad", "Rawalpindi"],
        Sindh: ["Karachi", "Hyderabad", "Sukkur"],
        "Khyber Pakhtunkhwa": ["Peshawar", "Mardan", "Abbottabad"],
        "Balochistan": ["Khuzdar", "Gwadar", "Quetta", "Zhob"],
        "Gilgit-Baltistan": ["Gilgit", "Skardu", "Hunza", "Chilas", "Khaplu"],
        "Azad Kashmir": ["Muzaffarabad", "Mirpur", "Rawalakot", "Athmuqam"]
    };

    const itemsPerPage = 10;


    const applyDefaultFilters = useCallback((data) => {
        const newFilteredNames = data.filter(name => {
            const matchesNeedValue = name.name1.includes(needValue);
            const matchesWeek = name.week === `Week ${selectedWeek}`;
            return matchesNeedValue && matchesWeek;
        });
        setFilteredNames(newFilteredNames);
    }, []);

    const fetchData = useCallback(async () => {
        const response = await fetch('http://localhost:3001/entries');
        const data = await response.json();
        setNames(data);
        applyDefaultFilters(data); // Apply default filters right after fetching
    }, [applyDefaultFilters]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    //seaach button function
    const handleSearch = () => {
        setCurrentPage(1);  // Reset page to 1 when a new search is performed
    
        const newFilteredNames = names.filter(name => {

            const matchesNeedValue = needValue ? name.name1.includes(needValue) : true;
            
            const matchesCountry = country && country !== "Any" ? name.country === country : true;

            const matchesState = state && state !== "Any" ? name.state === state : true;
          
            const matchesCity = city && city !== "Any" ? name.city === city : true;
            
            const weekNumber = parseInt(name.week.split(' ')[1], 10);

            const matchesWeek = weekNumber >= 1 && weekNumber <= selectedWeek;
    
            const matchesOption = checkbox.length > 0 ? checkbox.some(opt => name.option.includes(opt)) : true;
    
            if (country === "Any") {
                return matchesNeedValue && matchesWeek && matchesOption; // Only filter by needValue, week, and option
            }
            if (state === "Any") {
                return matchesNeedValue && matchesCountry && matchesWeek && matchesOption; // Only filter by needValue, week, and option
            }
            if (city === "Any") {
                return matchesNeedValue && matchesCountry && matchesState && matchesWeek && matchesOption; // Only filter by needValue, week, and option
            }

            return matchesNeedValue && matchesCountry && matchesState && matchesCity && matchesWeek && matchesOption;
        });
    
        setFilteredNames(newFilteredNames); // Update filtered names after search
    };
    
    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNames = filteredNames.slice(indexOfFirstItem, indexOfLastItem); // Slice filteredNames based on the current page
    const totalPages = Math.ceil(filteredNames.length / itemsPerPage);



    
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Display Page Numbers
    /*const handlePageNumberClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };*/
    
    const handleReset = () => {
        setNeedValue('Fashion');
        setCountry('');
        setState('');
        setCity('');
        setSelectedWeek(3);
        setCheckbox([]);
        setCurrentPage(1);  // Reset to the first page
        fetchData(); // Re-fetch data after resetting filters
    };
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    


    return (
        <div>
            <Drop setNeedValue={setNeedValue} />
            <Country setCountry={setCountry} setState={setState} setCity={setCity}/>

            {country && <State setState={setState} setCity={setCity} states={statesByCountry[country] || []} />}

            {state && <City setCity={setCity} cities={citiesByState[state] || []} />}

            <Week setSelectedWeek={setSelectedWeek} />
            <Checkbox setCheckbox={setCheckbox} />
   

            <Button onSearch={handleSearch} onReset={handleReset} />
            
            {currentNames.length > 0 ? (
                <Column names={currentNames} currentPage={currentPage} itemsPerPage={itemsPerPage} />
            ) : (
                <div>No data found. Please select different options.</div>
            )}

            <div className='mb-3'>
                <button onClick={handlePrevPage} disabled={currentPage === 1} className='bg-green-600 p-3 text-white font-semibold px-4 py-2 
            rounded-md border border-green-700 shadow-lg hover:bg-green-700 
            active:bg-green-700 mt-7 mr-4'>
                    Previous
                </button>
                <span> Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className='bg-red-600 p-3 text-white font-semibold px-5 py-2 
            rounded-md border border-green-700 shadow-lg hover:bg-red-700 
            active:bg-green-700 ml-5' >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Parent;
