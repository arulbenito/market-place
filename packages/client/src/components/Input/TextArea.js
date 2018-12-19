import React from 'react';

const TextArea = ({label, rows, name, type, value, onChange, focus, error }) => {
    return(
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <textarea autoFocus = {focus==='true'? true :false}
        id={name}
        name={name}  
        value={value}
        onChange={onChange}
        type={type}
        rows={rows}
        className="form-control">
        </textarea>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    )
}

export default TextArea;