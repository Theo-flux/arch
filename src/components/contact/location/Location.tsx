'use client';
import React from 'react';
import { Section, DivTag } from '@/shared';
import {
  Inner,
  Text,
  AdrressBox,
  AddressTitle,
  AddressInfo,
} from './location.css';

function Location() {
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
          </AdrressBox>
          <AdrressBox>
            <AddressTitle>Office II</AddressTitle>
            <AddressInfo>
              <p>Mail : archone@mail.com</p>
              <p>Address : 3399 Wines Lane TX</p>
              <p>Phone : 832-123-4321</p>
            </AddressInfo>
          </AdrressBox>
        </Inner>
      </DivTag>
    </Section>
  );
}

export default Location;
