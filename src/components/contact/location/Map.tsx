import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface MapProps {
  positionOne: { lat: number; lng: number };
  positionTwo: { lat: number; lng: number };
}

function ArchMap({ positionOne, positionTwo }: MapProps) {
  var markerIcon = L.icon({
    iconUrl: '/images/pop_pin.svg',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });
  return (
    <MapContainer center={positionTwo} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={markerIcon} position={positionOne}>
        <Popup>Main Office</Popup>
      </Marker>

      <Marker icon={markerIcon} position={positionTwo}>
        <Popup>Office II</Popup>
      </Marker>
    </MapContainer>
  );
}

export default ArchMap;
