import React from 'react'

const Input = ({
    placeholder,
    type,
    label,
    value,
    setValue,
    id,
    className,
    props,
}) => {
    return (
        <div className="flex flex-auto flex-col mt-1">
            <label htmlFor={id} className="text-[#52525C]">
                {label}
            </label>
            <input
                id={id}
                value={value}
                onChange={({ target }) => {
                    setValue(target.value)
                }}
                type={type}
                placeholder={placeholder}
                className={`shadow- p-3 rounded-md border border-zinc-400 bg-zinc-100  ${className}`}
                {...props}
            />
        </div>
    )
}

export default Input
