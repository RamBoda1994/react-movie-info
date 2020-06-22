import React from 'react';

const ErrorMessage = ({ error }) => {
    return (
        <h5 style={{ color: "red", textAlign:"center"}}>{error}</h5>
    )
}

export default ErrorMessage;