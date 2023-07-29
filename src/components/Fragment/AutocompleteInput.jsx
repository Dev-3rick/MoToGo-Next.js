import React, { useEffect, useState } from 'react'

const AutocompleteInput = ({ onAddressSelected, className, label }) => {
    useEffect(() => {
        const center = { lat: 50.064192, lng: -130.605469 }
        // Create a bounding box with sides ~10km away from the center point
        const defaultBounds = {
            north: center.lat + 0.1,
            south: center.lat - 0.1,
            east: center.lng + 0.1,
            west: center.lng - 0.1,
        }
        const input = document.getElementById('pac-input')
        const options = {
            bounds: defaultBounds,
            componentRestrictions: { country: 'br' },
            fields: ['address_components', 'geometry', 'icon', 'name'],
            strictBounds: false,
            types: ['address'],
        }
        const autocomplete = new google.maps.places.Autocomplete(input, options)

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace()
            if (onAddressSelected) {
                onAddressSelected(place.formatted_address)
            }
        })
    }, [onAddressSelected])

    return (
        <div className="flex flex-auto flex-col gap-2">
            <label htmlFor="pac-input" className="text-[#52525C]">
                {label}
            </label>
            <input
                id="pac-input"
                className={`shadow- p-3 rounded-md border border-zinc-400 bg-zinc-100 outline-none ${className}`}
            />
        </div>
    )
}

export default AutocompleteInput
