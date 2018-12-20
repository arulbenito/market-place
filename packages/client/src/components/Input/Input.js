import React from 'react';

const Input = ({label, name, type, value, onChange, focus, error }) => {
    return(
    <div className={'form-group ' + name} >
        <label htmlFor={name}>{label}</label>
        <input autoFocus = {focus==='true'? true :false}
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