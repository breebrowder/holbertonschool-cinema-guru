import React from 'react';
import '../general/general.css';


const Input = ({
    label, // The input label
    type, // Input type
    className, // Input custom classes
    value, // The controlled state
    setValue // The setState function of the above state
 }) => {
    const handleInput = (event) => {
        setValue(event.target.value)
    }
    return (
        <container className="text-input">
            <p>
                {label}:
            </p>
            <input label={label} type={type} className={className} value={value} setValue={setValue} onChange={handleInput} />
        </container>
    );
}

export default Input;
