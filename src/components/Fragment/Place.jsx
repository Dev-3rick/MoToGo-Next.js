import React from 'react'

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete'

import { Check, ChevronsUpDown } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/popover'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

const Place = ({ setSelected, label }) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            locationRestriction: {
                center: {
                    lat: -19.9369,
                    lng: -43.4722,
                },
                radius: 2000,
            },
            types: ['address'],
        },
    })

    const handleSelect = async (address) => {
        let streetName = address.split('-')[0]
        streetName = setValue(streetName, false)
        clearSuggestions()

        setSelected(address)
    }

    return (
        <>
            <label className="text-[#52525C] mb-10">{label}</label>
            <Command
                onChange={(e) => {
                    setValue(e.target.value)
                    console.log(data, e.target.value)
                }}
                value={value}
            >
                <CommandInput value={value} />

                {status === 'OK' && (
                    <CommandGroup>
                        {data.map(({ place_id, description }) => (
                            <CommandItem
                                key={place_id}
                                value={description}
                                onSelect={handleSelect}
                            >
                                {description}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                )}
            </Command>
        </>
    )
}
export default Place
