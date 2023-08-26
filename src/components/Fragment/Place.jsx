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
    } = usePlacesAutocomplete({
        requestOptions: {
            types: ['street_address'],
            locationBias: {
                radius: 100,
                center: { lat: -19.9369, lng: -43.4722 },
            },
        },
    })

    const handleSelect = async (address) => {
        let streetName = address.split('-')[0]
        streetName = setValue(streetName, false)
        clearSuggestions()
        alert(address)

        setSelected(address)
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
                                return (
                                    <ComboboxOption
                                        key={place_id}
                                        value={description}
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
