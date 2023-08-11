'use client';
import React from 'react';
import { ButtonIcon, Section } from '@/shared';
import {
  FeaturedContainer,
  FeaturedTopInner,
  FeaturedBottomInner,
  Title,
  FeaturedGrid,
  Figure,
  Img,
  Overlay,
  Text,
  SmallText,
  InfoBox,
  HeadText,
} from './featured.css';

function Featured() {
  return (
    <Section>
      <FeaturedContainer>
        <FeaturedTopInner>
          <Title>Feature</Title>
          <ButtonIcon text="See All" />
        </FeaturedTopInner>

        <FeaturedGrid>
          <Figure>
            <Img src={'/images/feat_1.png'} alt="feat_1" />
            <Overlay>
              <InfoBox>
                <Text>Project Del Sol</Text>
                <SmallText>View All Projects</SmallText>
              </InfoBox>
            </Overlay>
            <HeadText>1</HeadText>
          </Figure>
          <Figure>
            <Img src={'/images/feat_2.png'} alt="feat_2" />
            <Overlay>
              <InfoBox>
                <Text>228B Tower</Text>
                <SmallText>View All Projects</SmallText>
              </InfoBox>
            </Overlay>
            <HeadText>2</HeadText>
          </Figure>
          <Figure>
            <Img src={'/images/feat_3.png'} alt="feat_3" />
            <Overlay>
              <InfoBox>
                <Text>Le Prototype</Text>
                <SmallText>View All Projects</SmallText>
              </InfoBox>
            </Overlay>
            <HeadText>3</HeadText>
          </Figure>
        </FeaturedGrid>

        <FeaturedBottomInner>
          <ButtonIcon text="See All" />
        </FeaturedBottomInner>
      </FeaturedContainer>
    </Section>
  );
}

export default Featured;
