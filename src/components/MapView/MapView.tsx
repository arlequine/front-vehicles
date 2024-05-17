import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { VehicleRoute } from '@/types';

const MapView: React.FC<VehicleRoute> = ({ geojsonData }) => {
    console.log(geojsonData)
    return (
        <MapContainer center={[19.42847, -99.12766]} zoom={13} style={{ height: 600, width: 800 }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={geojsonData.geojson}
           onEachFeature={(feature, layer) => {
            if (feature.properties && feature.properties.name) {
                layer.bindPopup(feature.properties.name);
            }
        }}
             />
        </MapContainer>
    );
};

export default MapView;