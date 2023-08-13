'use client';
import React from 'react';
import { Section, DivTag } from '@/shared';
import {
  Inner,
  Wrapper,
  Figure,
  Img,
  Overlay,
  InfoWrapper,
  InfoBox,
  Text,
  SmallText,
} from './heritage.css';

function Heritage() {
  return (
    <Section>
      <DivTag>
        <Inner>
          <InfoWrapper>
            <InfoBox>
              <Text>Our</Text>
              <Text>Heritage</Text>
              <SmallText>
                Founded in 2007, we started as a trio of architects. Our
                complimentary skills and relentless attention to detail turned
                Arch into one of the most sought after boutique firms in the
                country.
              </SmallText>

              <SmallText>
                Speciliazing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their
                surroundings. We consider every detail from every surrounding
                element to inform our designs.
              </SmallText>

              <SmallText>
                Our small team of world-class professionals provides input on
                every project.
              </SmallText>
            </InfoBox>
          </InfoWrapper>

          <Wrapper>
            <Figure>
              <Img
                src={'/images/heritage_image.png'}
                alt="heritage_image.png"
              />
              <Overlay></Overlay>
            </Figure>
          </Wrapper>
        </Inner>
      </DivTag>
    </Section>
  );
}

export default Heritage;
