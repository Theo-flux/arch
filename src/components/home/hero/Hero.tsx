'use client';
import React from 'react';
import { Section, ButtonIcon } from '@/shared';
import {
  HeroTag,
  Figure,
  Img,
  Overlay,
  InfoBox,
  Title,
  Text,
} from './hero.css';

function Hero() {
  return (
    <Section>
      <HeroTag>
        <Figure>
          <Img src={'/images/hero_one.png'} alt="about image" />
        </Figure>
        <Overlay>
          <InfoBox>
            <Title>Project Paramour</Title>
            <Text>
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </Text>
            <ButtonIcon text="See Our Portfolio" />
          </InfoBox>
        </Overlay>
      </HeroTag>
    </Section>
  );
}

export default Hero;
