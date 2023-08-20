import React from 'react'

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete'
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from '@reach/combobox'
import '@reach/combobox/styles.css'

const Place = ({ setSelected, label }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete()

    const handleSelect = async (address) => {
        setValue(address, false)
        clearSuggestions()

        const results = await getGeocode({ address })
        const { lat, lng } = await getLatLng(results[0])
        setSelected({ lat, lng })
    }

    return (
        <>
            <label className="text-[#52525C]">{label}</label>
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!ready}
                    className=" shadow- p-3 rounded-md border border-zinc-400 bg-zinc-100 w-full outline-none"
                    placeholder="Search an address"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === 'OK' &&
                            data.map(({ place_id, description }) => {
                                const streetName = description.split('-')[0]
                                console.log(JSON.stringify(description))
                                return (
                                    <ComboboxOption
                                        key={place_id}
                                        value={streetName}
                                    />
                                )
                            })}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </>
    )
}
export default Place
