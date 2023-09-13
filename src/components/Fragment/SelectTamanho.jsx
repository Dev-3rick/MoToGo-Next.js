import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const SelectTamanho = ({ label }) => {
    return (
        <>
            <Select className="mt-7">
                <label className="text-[#52525C] mb-10 pt-12">Selecione</label>
                <SelectTrigger className="shadow- p-3 rounded-md border border-zinc-400 bg-zinc-100 w-full outline-none">
                    <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}

export default SelectTamanho
