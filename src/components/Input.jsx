import React from 'react'

const Input = ({ placeholder, type, label }) => {
    return (
        <div className="flex flex-auto flex-col gap-2">
            <label className="text-[#52525C]">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className=" shadow- p-3 rounded-md border border-zinc-400 bg-zinc-100 outline-none"
            />
        </div>
    )
}

export default Input
