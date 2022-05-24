import React from 'react';
import '../general/general.css';

const SelectInput = ({
    label, // The input label
    options, // Array of select options
    className, // SelectInput custom classes
    value, // The controlled state
    setValue // The setState function of the above state
 }) => {
    const handleSelect = (event) => {
        setValue(event.target.value)
    }
    return (
        <container className="sort-feature">
             <p>
                {label}:
            </p>
            <select label={label} options={options} className={className} value={value} setValue={setValue} onChange={handleSelect}>
                {options.map((option) => (
                <option value={option.value}>{option.label}</option>))}
            </select>
        </container>
    );
}

export default SelectInput;