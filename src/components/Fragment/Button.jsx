import React from 'react'

const Button = ({ text, type, color, setClick }) => {
    console.log(type)
    if (type !== 'submit') {
        return (
            <button
                className={`${color} focus:ring-2  p-2 w-full rounded-md font-semibold shadow-xl`}
                type={type}
                onClick={() => {
                    setClick(text)
                }}
            >
                {text}
            </button>
        )
    } else {
        return (
            <button
                className={`${color} focus:ring-2  p-2 w-full rounded-md font-semibold shadow-xl`}
                type={type}
            >
                {text}
            </button>
        )
    }
}

export default Button
