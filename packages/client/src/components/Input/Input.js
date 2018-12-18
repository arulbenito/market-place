import React from 'react';

const Input = ({name, type, value, onChange, focus, error }) => {
    return(
    <div className="form-group">
        <label htmlFor={name}>{name}</label>
        <input autofocus = {focus}
        id={name}
        name={name}  
        value={value}
        onChange={onChange}
        type={type}
        className="form-control">
        </input>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    )
}

export default Input;