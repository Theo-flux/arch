'use client';
import React from 'react';
import { ButtonIcon, Section } from '@/shared';
import { AboutTag, Figure, Img, Overlay, InfoBox, InfoText } from './about.css';

function About() {
  return (
    <Section>
      <AboutTag>
        <Figure>
          <Img src={'/images/about_us.png'} alt="about image" />
        </Figure>
        <Overlay>
          <InfoBox>
            <InfoText>Small team, big ideas</InfoText>
            <ButtonIcon text='About Us' />
          </InfoBox>
        </Overlay>
      </AboutTag>
    </Section>
  );
}

export default About;
