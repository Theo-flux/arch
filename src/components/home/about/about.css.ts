import { HeadingM, DivTag } from '@/shared';
import { device } from '@/utils';
import styled from 'styled-components';

export const AboutTag = styled(DivTag)`
  position: relative;
  height: 560px;
  width: 100%;

  @media ${device.md} {
    width: 90%;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: #00000075;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2rem;

  @media ${device.md} {
    padding: 0 6rem;
  }

  @media ${device.lg} {
    padding: 0 12.5rem;
  }
`;

export const InfoText = styled(HeadingM)`
  width: 300px;
  color: #fff;
  margin-bottom: 1rem;

  @media ${device.md} {
    width: 445px;
  }
`;
