import styled from 'styled-components';
import { device } from '@/utils';
import { DivTag, BodyText, HeadingM, HeadingXL } from '@/shared';

export const AboutTag = styled(DivTag)`
  width: 100%;
  height: 529px;

  @media ${device.md} {
    width: 90%;
    height: 720px;
  }

  @media ${device.lg} {
    height: 720px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 240px;

  @media ${device.base} {
    height: 720px;
  }

  @media ${device.base} {
    width: 573px;
  }

  @media ${device.lg} {
    width: 635px;
  }
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

export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: 345px;
  height: 331px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: white;

  @media ${device.base} {
    width: 90%;
    right: 0px;
  }

  @media ${device.md} {
    width: 573px;
  }

  @media ${device.lg} {
    width: 633px;
    height: 503px;
  }
`;

export const InfoBox = styled.div`
  width: 80%;

  @media ${device.lg} {
    width: 446px;
  }
`;

export const Title = styled(HeadingXL)`
  display: none;

  @media ${device.md} {
    display: block;
    z-index: 1;
    position: absolute;
    top: 280px;
    right: 200px;
  }

  @media ${device.lg} {
    top: 130px;
    right: 0px;
  }
`;

export const Text = styled(HeadingM)`
  color: var(--very-dark-blue);
  margin-bottom: 2rem;
`;

export const SmallText = styled(BodyText)`
  color: var(--dark-grey);
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0rem;
  }
`;
