import React from 'react';
import Input from './Input'
import '../general/general.css';

const Number = ({
    label, 
    min, 
    max,
    value, 
    setValue 
}) => {
    return (
        <Input type="number" label={label} className="year" min={min} max={max} value={value} setValue={setValue} />
    );
}

export default Number;
