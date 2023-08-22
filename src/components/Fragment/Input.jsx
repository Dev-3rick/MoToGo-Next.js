import React from 'react'

const Input = ({
    placeholder,
    type,
    label,
    value,
    setValue,
    id,
    className,
}) => {
    return (
        <div className="flex flex-auto flex-col gap-2">
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
            />
        </div>
    )
}

export default Input
