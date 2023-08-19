import { BodyText, HeadingS } from '@/shared';
import { device, transition } from '@/utils';
import styled from 'styled-components';

export const PortfolioInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 240px;

  @media ${device.lg} {
    width: 350px;
    height: 560px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 2rem 1rem;
  ${transition}

  &:hover {
    background-color: #97979780;
  }
`;

export const InfoContainer = styled.div``;

export const InfoText = styled(HeadingS)``;

export const SmallText = styled(BodyText)`
  opacity: 0.75;
`;
