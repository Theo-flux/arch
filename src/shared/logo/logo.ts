'use client';
import { device } from '@/utils';
import styled from 'styled-components';

export const Figure = styled.figure`
  width: fit-content;
  /* border: 1px solid magenta; */
`;
export const Image = styled.img`
  width: 70%;

  @media ${device.md} {
    width: 100%;
  }
`;

export const FooterImage = styled.img`
  width: 100%;
`;
