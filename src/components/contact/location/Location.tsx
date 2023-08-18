'use client';
import React, { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Section, DivTag, StyledArrowIcon } from '@/shared';
import {
  Inner,
  Text,
  AdrressBox,
  AddressTitle,
  AddressInfo,
  MapSelector,
  SelectorText,
  MapBox,
} from './location.css';
import L from 'leaflet';

function Location() {
  const positionOne = { lat: 36.59679, lng: -87.28701 };
  const positionTwo = { lat: 32.958481, lng: -96.256332 };

  var markerIcon = L.icon({
    iconUrl: '/images/pop_pin.svg',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  return (
    <Section>
      <DivTag>
        <Inner>
          <Text>Contact Details</Text>
          <AdrressBox>
            <AddressTitle>Main Office</AddressTitle>
            <AddressInfo>
              <p>Mail : archone@mail.com</p>
              <p>Address : 1892 Chenoweth Drive TN</p>
              <p>Phone : 123-456-3451</p>
            </AddressInfo>

            <MapSelector>
              <SelectorText>View on Map</SelectorText>
              <StyledArrowIcon />
            </MapSelector>
          </AdrressBox>
          <AdrressBox>
            <AddressTitle>Office II</AddressTitle>
            <AddressInfo>
              <p>Mail : archone@mail.com</p>
              <p>Address : 3399 Wines Lane TX</p>
              <p>Phone : 832-123-4321</p>
            </AddressInfo>
            <MapSelector>
              <SelectorText>View on Map</SelectorText>
              <StyledArrowIcon />
            </MapSelector>
          </AdrressBox>
        </Inner>
      </DivTag>
      <MapBox>
        {typeof window !== 'undefined' && (
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
        )}
      </MapBox>
    </Section>
  );
}

export default Location;
