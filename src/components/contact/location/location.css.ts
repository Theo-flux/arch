import { device } from '@/utils';
import styled from 'styled-components';
import { HeadingM } from '@/shared';

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${device.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Text = styled(HeadingM)`
  color: var(--very-dark-blue);
  margin-bottom: 2rem;
  width: 250px;
  /* border: 1px solid magenta; */
  @media ${device.lg} {
    width: 350px;
  }
`;

export const AdrressBox = styled.div`
  width: 100%;

  @media ${device.lg} {
    width: 350px;
  }

  margin-bottom: 2rem;
`;

export const AddressTitle = styled.p`
  color: #60636d;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
`;

export const AddressInfo = styled.div`
  color: #60636d;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const SelectorText = styled.p`
  color: #1b1d23;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  margin-right: 1rem;
`;

export const MapSelector = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
  margin-top: 3rem;

  &:hover ${SelectorText} {
    text-decoration: underline;
  }
`;

export const MapBox = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 5rem auto 0rem auto;
  height: 367px;
  /* border: 1px solid magenta; */
  overflow: hidden;

  @media ${device.md} {
    height: 560px;
  }
`;
