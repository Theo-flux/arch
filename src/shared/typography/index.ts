'use client';
import { device } from '@/utils';
import styled from 'styled-components';

export const HeadingXL = styled.h1`
  display: none;
  color: var(--very-light-grey);
  font-family: var(--font-league-spartans);
  font-style: normal;
  font-weight: 700;
  line-height: 200px;
  letter-spacing: -5px;

  @media ${device.md} {
    display: block;
    font-size: 120px;
  }

  @media ${device.lg} {
    font-size: 250px;
  }
`;

export const HeadingL = styled.h2`
  font-family: var(--font-league-spartans);
  font-size: 96px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: -2px;
`;

export const HeadingM = styled.h3`
  font-family: var(--font-league-spartans);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 108.333% */
  letter-spacing: -1.714px;

  @media ${device.md} {
    font-size: 72px;
    line-height: 64px;
    letter-spacing: -2px;
  }
`;

export const HeadingS = styled.h4`
  font-family: var(--font-league-spartans);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;

export const BodyText = styled.p`
  font-family: var(--font-league-spartans);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
