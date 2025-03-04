import React from "react";

const Button = ({ type, action, params, value, customClass}: any) => {
    let mainColor = '';
    let textColor = '';
    let hoverColor = '';

    switch(type) {
        case 'submit':
            mainColor = 'blue-500';
            textColor = 'white';
            hoverColor = 'blue-600';
            break;
        case 'cancel':
            mainColor = 'gray-300';
            textColor = 'gray-700';
            hoverColor = 'gray-400';
            break;
        case 'delete':
            mainColor = 'red-500';
            textColor = 'white';
            hoverColor = 'red-600';
            break;
    }

    return (
        <button onClick={() => action(params)}
            type={type}
            className={`bg-${mainColor} text-${textColor} hover:bg-${hoverColor} ${customClass}`} 
            >
                {value}
        </button>
    )
};

export default Button;