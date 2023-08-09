import styled from 'styled-components';
import { device, radius, transition } from '../../utils';
import { LuArrowUpRight } from 'react-icons/lu';

const ButtonReset = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 1rem;
  font-size: 1rem;
  ${transition}

  @media ${device.md} {
    font-size: 1em;
    padding: 0.75rem 2rem;
  }
`;

export const Button = styled(ButtonReset)`
  color: white;
  background-color: var(--very-dark-blue);

  @media ${device.md} {
    &:hover {
      background-color: var(--dark-grey);
    }
  }
`;

export const ButtonOutline = styled(ButtonReset)`
  color: var(--very-dark-blue);
  background-color: transparent;
  ${transition}

  &:hover {
    color: white;
    background-color: var(--very-dark-blue);
  }
`;

export const CTABtn = styled(ButtonReset)`
  padding: 1rem 2rem;
  color: var(--white);
  background-color: var(--very-dark-blue);
  ${transition}

  &:hover {
    color: var(--very-dark-blue);
    background-color: var(--S50);
  }
`;

export const CTABtnOutline = styled(ButtonReset)`
  padding: 1rem 2rem;
  color: white;
  color: var(--very-dark-blue);
  background-color: transparent;
  ${transition}

  &:hover {
    color: white;
    background-color: var(--very-dark-blue);
  }
`;

export const StyledArrowIcon = styled(LuArrowUpRight)`
    font-size: 2rem;
`;

export const ButtonIconContainer = styled(ButtonReset)`
  padding: 1rem 2rem;
  color: white;
  background-color: var(--very-dark-blue);
  ${transition}

  &:hover {
    background-color: var(--dark-grey);
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.p`
  margin-right: 1rem;
  text-align: right;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 138.889% */
`;
