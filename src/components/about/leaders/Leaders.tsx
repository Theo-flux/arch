'use client';
import React from 'react';
import { Section, DivTag } from '@/shared';
import {
  Figure,
  InfoWrapper,
  LeadersContainer,
  LeadersWrapper,
  Overlay,
  Text,
  Wrapper,
  Img,
} from './leaders.css';

function Leaders() {
  return (
    <Section>
      <DivTag>
        <LeadersContainer>
          <InfoWrapper>
            <Text>The Leaders</Text>
          </InfoWrapper>
          <LeadersWrapper>
            <Wrapper>
              <Figure>
                <Img src="" alt="" />
              </Figure>
              <Overlay></Overlay>
            </Wrapper>
          </LeadersWrapper>
        </LeadersContainer>
      </DivTag>
    </Section>
  );
}

export default Leaders;
