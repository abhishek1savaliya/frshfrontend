import React from 'react';

function Alert(props) {

    const capitalized = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div className="h-1"> 
            {props.alert &&
                <div className={`alert alert-${props.alert.type} bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3`} role="alert"> 
                 
                    <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
                </div>}
        </div>
    );
}

export default Alert;
