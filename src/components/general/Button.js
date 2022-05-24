import React from 'react';
import '../general/general.css';

const Button = ({ 
    label, // The button label
    className, // Button custom classes
    onClick // The onClick handler for the button
}) => {
    return (
        <button className={"submit-button "} onClick={onClick}>
            <p>
                {label}
            </p>
        </button>
    );
}

export default Button;
