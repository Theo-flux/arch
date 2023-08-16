'use client';
import React from 'react';
import { Section, DivTag, IconButton } from '@/shared';
import {
  Inner,
  Text,
  FormContainer,
  GlobalInput,
  GlobalTextArea,
} from './email.css';

function Email() {
  return (
    <Section>
      <DivTag>
        <Inner>
          <Text>Connect with us</Text>
          <FormContainer>
            <GlobalInput type="text" placeholder="Name" name="name" />
            <GlobalInput type="email" placeholder="Email" name="email" />
            <GlobalTextArea placeholder="Message" name="message" />
            <IconButton />
          </FormContainer>
        </Inner>
      </DivTag>
    </Section>
  );
}

export default Email;
