'use client';
import React from 'react';
import { Section, DivTag } from '@/shared';
import {
  Inner,
  Title,
  InfoWrapper,
  InfoBox,
  Figure,
  Img,
  Text,
  SmallText,
} from './welcome.css';

function Welcome() {
  return (
    <Section>
      <DivTag>
        <Inner>
          <Title>Welcome</Title>
          <InfoWrapper>
            <InfoBox>
              <Text>Welcome to Arch Studio</Text>
              <SmallText>
                We have a unique network and skillset to help bring your
                projects to life. Our small team of highly skilled individuals
                combined with our large network put us in a strong position to
                deliver exceptional results.
              </SmallText>

              <SmallText>
                Over the past 10 years, we have worked on all kinds of projects.
                From stations to high-rise buildings, we create spaces that
                inspire and delight.
              </SmallText>

              <SmallText>
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony
                the surrounding area to create truly stunning projects that will
                stand the test of time.
              </SmallText>
            </InfoBox>
            <Figure>
              <Img src="/images/welcome_img.png" alt="metallic_building.png" />
            </Figure>
          </InfoWrapper>
        </Inner>
      </DivTag>
    </Section>
  );
}

export default Welcome;
