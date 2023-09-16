import React from 'react'

const Button = ({ text, type, color, className, setClick }) => {
    if (type !== 'submit') {
        return (
            <button
                className={`${color} focus:ring-2  rounded-md font-semibold shadow-xl ${className} `}
                type={type}
                onClick={() => {
                    setClick(text)
                }}
                name={text}
            >
                {text}
            </button>
        )
    } else {
        return (
            <button
                className={`${color} focus:ring-2  p-2  rounded-md font-semibold shadow-xl ${className} `}
                type={type}
            >
                {text}
            </button>
        )
    }
}

export default Button
