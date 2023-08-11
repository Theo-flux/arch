import { BodyText, HeadingM, HeadingS, HeadingXL } from '@/shared';
import { device } from '@/utils';
import styled from 'styled-components';

export const FeaturedContainer = styled.div`
  width: 95%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const FeaturedTopInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  & > button {
    display: none;
  }

  @media ${device.md} {
    & > button {
      display: flex;
    }
  }
`;

export const FeaturedBottomInner = styled.div`
  margin-top: 2rem;
  width: 100%;
  & > button {
    width: 100%;
    display: flex;
  }

  @media ${device.md} {
    & > button {
      display: none;
    }
  }
`;

export const Title = styled(HeadingM)`
  color: var(--very-dark-blue);
`;

export const FeaturedGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  gap: 1rem;

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;

  @media ${device.lg} {
    width: 32%;
    height: 556px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  @media ${device.lg} {
    object-fit: fill;
    object-position: bottom;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 2.5rem;
`;

export const InfoBox = styled.div``;

export const Text = styled(HeadingS)`
  color: white;
  margin-bottom: 0.1rem;
`;

export const SmallText = styled(BodyText)`
  color: #ffffff75;
  cursor: pointer;
`;

export const HeadText = styled(HeadingXL)`
  color: #ffffff75;
  position: absolute;
  top: 30px;
  right: -10px;
  font-size: 250px;
`;
