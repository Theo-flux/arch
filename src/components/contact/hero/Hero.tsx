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
            <Img src={'/images/contact_hero.png'} alt="contact image" />
            <Overlay></Overlay>
          </Figure>
          <Title>Contact</Title>
          <InfoWrapper>
            <InfoBox>
              <Text>Tell us about your project</Text>
              <SmallText>
                We’d love to hear more about your project. Please, leave a
                message below or give us a call. We have two offices, one in
                Texas and one in Tennessee. If you find yourself nearby, come
                say hello!
              </SmallText>
            </InfoBox>
          </InfoWrapper>
        </Wrapper>
      </AboutTag>
    </Section>
  );
}

export default Hero;
