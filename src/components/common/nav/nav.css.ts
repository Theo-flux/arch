'use-client';
import { device } from '@/utils';
import Link from 'next/link';
import { BodyText } from '@/shared';
import styled from 'styled-components';
import { TfiMenu } from 'react-icons/tfi';

export const NavWrapper = styled.div`
  width: 100%;
  padding: 1rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.md} {
    justify-content: flex-start;
  }
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

export const NavItems = styled.div`
  position: absolute;
  top: 60px;
  right: -800px;
  width: 95%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: var(--very-light-grey);

  /* border: 1px solid magenta; */

  @media ${device.md} {
    padding: 0rem;
    width: auto;
    background-color: transparent;
    position: static;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 9;
  top: 60px;
  left: -800px;
  width: 100%;
  height: 100vh;
  background: #000;

  @media ${device.md} {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.75rem;

  &:last-of-type {
    margin-bottom: 0rem;
  }

  @media ${device.md} {
    margin-left: 4rem;
    margin-bottom: 0rem;
  }
`;

export const StyledLinkText = styled(BodyText)`
  color: var(--very-dark-blue);
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;

  @media ${device.md} {
    color: var(--medium-grey);
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
  }
`;

export const StyledMenu = styled(TfiMenu)`
  font-size: 1.5rem;
  display: block;

  @media ${device.md} {
    display: none;
  }
`;
