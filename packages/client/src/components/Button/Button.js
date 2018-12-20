import React from 'react';

const Button = ({ label, validate, className}) => {
    return (
        <button 
            disabled={validate}
            className={className}>{label}
        </button>
    )
}

export default Button;