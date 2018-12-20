import React from 'react';

const Select = ({label, options,value, name, onChange,focus, error }) => {
    return(
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select autoFocus = {focus==='true'? true :false}
        id={name}
        value={value}
        name={name}  
        onChange={onChange}
        className="form-control">
            <option value=""/>
                {options.map(option=>(
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    )
}

export default Select;