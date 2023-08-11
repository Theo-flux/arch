import styled from 'styled-components';
import Link from 'next/link';
import { BodyText } from '@/shared';
import { device, transition } from '@/utils';

export const FooterTag = styled.footer`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.xl} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const LogoPod = styled.div`
  z-index: 1;
  width: fit-content;
  padding: 2rem;
  background-color: var(--very-dark-blue);

  @media ${device.xl} {
    padding: 4rem;
  }
`;

export const FooterRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 390px;
  position: relative;
  top: -40px;
  background-color: var(--very-light-grey);
  padding: 3rem 0rem;

  @media ${device.xl} {
    padding: 0rem;
    position: static;
    top: 0px;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    background-color: var(--very-light-grey);
  }
`;

export const FooterItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media ${device.xl} {
    width: 80%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--very-light-grey);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 2rem;
  ${transition}

  @media ${device.xl} {
    margin-left: 4rem;
    margin-bottom: 0rem;
  }
`;

export const StyledLinkText = styled(BodyText)`
  color: var(--medium-grey);
  font-size: 18px;
  font-weight: 700px;
  line-height: 25px;

  &:hover {
    color: var(--very-dark-blue);
  }
`;

export const ButtonPod = styled.div`
  @media ${device.xl} {
    padding: 2.9rem 0rem;
    background: linear-gradient(90deg, #eeeff4 51.04%, #fff 51.05%);
  }
`;
