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
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.lg} {
    width: 730px;
  }

  & > button {
    width: fit-content;
    align-self: flex-end;
  }
`;

export const GlobalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--very-dark-blue);
  outline: none;
  color: var(--very-dark-blue);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.312px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;

  &::placeholder {
    color: var(--light-grey);
  }
`;

export const GlobalTextArea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--very-dark-blue);
  outline: none;
  color: var(--very-dark-blue);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.312px;
  padding: 1rem 2rem 2rem 2rem;
  resize: none;

  &::placeholder {
    color: var(--light-grey);
  }
`;
