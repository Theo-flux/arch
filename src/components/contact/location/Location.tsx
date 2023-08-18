'use client';
import React from 'react';
import dynamic from 'next/dynamic';
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
const ArchMap = dynamic(() => import('./Map'), {
  ssr: false,
});

function Location() {
  const positionOne = { lat: 36.59679, lng: -87.28701 };
  const positionTwo = { lat: 32.958481, lng: -96.256332 };

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
        <ArchMap positionOne={positionOne} positionTwo={positionTwo} />
      </MapBox>
    </Section>
  );
}

export default Location;
