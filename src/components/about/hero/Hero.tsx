'use client';
import React from 'react';
import { Section } from '@/shared';
import {
  AboutTag,
  Wrapper,
  Figure,
  Img,
  Overlay,
  InfoWrapper,
  InfoBox,
  Title,
  Text,
  SmallText,
} from './hero.css';

function Hero() {
  return (
    <Section>
      <AboutTag>
        <Wrapper>
          <Figure>
            <Img src={'/images/about_hero.png'} alt="about image" />
            <Overlay></Overlay>
          </Figure>
          <Title>About</Title>
          <InfoWrapper>
            <InfoBox>
              <Text>Your team of professionals</Text>
              <SmallText>
                Our small team of world-class professionals will work with you
                every step of the way. Strong relationships are at the core of
                everything we do. This extends to the relationship our projects
                have with their surroundings.
              </SmallText>
            </InfoBox>
          </InfoWrapper>
        </Wrapper>
      </AboutTag>
    </Section>
  );
}

export default Hero;
