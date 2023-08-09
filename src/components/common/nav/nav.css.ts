'use-client';
import { device } from '@/utils';
import styled from 'styled-components';

export const NavWrapper = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  /* border: 1px solid magenta; */
`;

export const Hanger = styled.div`
  display: none;
  position: absolute;
  z-index: 5;
  left: 10px;
  /* border: 1px solid magenta; */
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.xl} {
    display: flex;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 104px;
  background-color: var(--light-grey);
`;

export const CurrentPage = styled.p`
  transform: rotate(90deg) translateX(120px);
  color: var(--light-grey);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  letter-spacing: 18px;
`;
