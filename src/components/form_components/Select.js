import React from 'react';
import { HTMLSelect } from "@blueprintjs/core";

export const Select = ({ onChange, options, minimal=false, large=false, ...otherProps}) => (
    <HTMLSelect 
        minimal={minimal}
        large={large}
        onChange={onChange} 
        options={options} 
        {...otherProps} 
    />
)  

export default Select;