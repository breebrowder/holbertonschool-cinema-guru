import React from 'react';
import '../general/general.css';

const SearchBar = ({ 
    title, // The controlled state
    setTitle // The setState function of the above state
}) => {
    const handleInput = (event) => {
        setTitle(event.target.value)
    }
    return (
        <container className="search">
            <input type="text" placeholder="Search Movies" title={title} setTitle={setTitle} onChange={handleInput} />
        </container>
    );
}

export default SearchBar;
