import styled from 'styled-components';
import { device, transition } from '@/utils';
import { HeadingM, BodyText, HeadingS } from '@/shared';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export const LeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const LeadersWrapper = styled.div`
  width: 100%;
  /* border: 1px solid magenta; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.md} {
    /* width: 570px; */
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  @media ${device.lg} {
    width: 730px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  @media ${device.md} {
    width: 280px;
    height: 335px;
  }

  @media ${device.lg} {
    width: 350px;
    height: 400px;
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
  left: -400px;
  width: 100%;
  height: 100%;
  background-color: #00000075;
  display: flex;
  justify-content: center;
  align-items: center;
  ${transition}
`;

export const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 80%;
  cursor: pointer;

  &:hover ${Overlay} {
    left: 0px;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: white;
  /* border: 1px solid magenta; */
  @media ${device.md} {
    /* width: 570px; */
  }

  @media ${device.lg} {
    width: 250px;
  }
`;

export const Text = styled(HeadingM)`
  color: var(--very-dark-blue);
  margin-bottom: 2rem;
  width: 250px;
  /* border: 1px solid magenta; */
`;

export const LeaderInfo = styled.div`
  background-color: #fff;
  padding-top: 1rem;
`;

export const SmallHeading = styled(HeadingS)`
  color: var(--very-dark-blue);
`;

export const SmallText = styled(BodyText)`
  color: #1b1d2375;
`;

export const Row = styled.div`
  color: white;
  font-size: 2.5rem;
`;

export const StyledLinkedinIcon = styled(FaLinkedin)`
  margin-right: 1rem;
`;
export const StyledTwitterIcon = styled(FaTwitter)``;
