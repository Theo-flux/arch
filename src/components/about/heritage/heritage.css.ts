import styled from 'styled-components';
import { device } from '@/utils';
import { HeadingM, BodyText } from '@/shared';

export const Inner = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: none;
  position: relative;
  width: 100%;

  @media ${device.lg} {
    display: block;
    width: 540px;
    height: 568px;
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

export const InfoWrapper = styled.div`
  bottom: 0px;
  width: 445px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: white;

  @media ${device.md} {
    width: 100%;
  }
  @media ${device.lg} {
    width: 445px;
  }
`;

export const InfoBox = styled.div`
  width: 100%;

  @media ${device.lg} {
    width: 446px;
  }
`;

export const Text = styled(HeadingM)`
  color: var(--very-dark-blue);
  margin-bottom: 2rem;
  width: 200px;
  /* border: 1px solid magenta; */
`;

export const SmallText = styled(BodyText)`
  color: var(--dark-grey);
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0rem;
  }
`;
