import React from 'react'

const Button = ({ text, type, color }) => {
    return (
        <button
            className={`${color} focus:ring-2  p-2 w-full rounded-md font-semibold shadow-xl`}
            type={type}
        >
            {text}
        </button>
    )
}

export default Button
