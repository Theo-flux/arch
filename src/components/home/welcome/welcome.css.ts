import { BodyText, HeadingM, HeadingXL } from '@/shared';
import { device } from '@/utils';
import styled from 'styled-components';

export const Inner = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.lg} {
    justify-content: flex-end;
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 6rem;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoBox = styled.div`
  width: 100%;
  @media ${device.lg} {
    width: 446px;
  }
`;

export const Figure = styled.figure`
  display: none;

  @media ${device.lg} {
    display: block;
    width: 350px;
    height: 568px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

export const Title = styled(HeadingXL)`
  display: none;

  @media ${device.lg} {
    display: block;
    position: absolute;
    top: 0px;
    right: 180px;
  }
  @media ${device.xl} {
    right: 200px;
  }
`;

export const Text = styled(HeadingM)`
  color: var(--very-dark-blue);
  margin-bottom: 1rem;
`;

export const SmallText = styled(BodyText)`
  color: var(--dark-grey);
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0rem;
  }
`;
