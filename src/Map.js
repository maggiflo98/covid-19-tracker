import React from 'react'
import {MapContainer as LeafletMap, TileLayer } from 'react-leaflet'

function Map() {
    return (
        <MapContainer center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
            {/* <LeafletMap>
            <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
            </LeafletMap> */}
        </MapContainer>

    )
}

export default Map
