'use client';
import React from 'react';
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

function Location() {
  const position = { lat: 51.505, lng: -0.09 };
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
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </MapBox>
    </Section>
  );
}

export default Location;
