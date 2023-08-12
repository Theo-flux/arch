'use client';
import React from 'react';
import { ButtonIcon } from '@/shared';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import {
  HeroSection,
  HeroTag,
  Figure,
  Img,
  Overlay,
  InfoBox,
  Title,
  Text,
} from './hero.css';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

function Hero() {
  const pagination = {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
    },
  };

  return (
    <HeroSection>
      <Swiper
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
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
        </SwiperSlide>

        <SwiperSlide>
          <HeroTag>
            <Figure>
              <Img src={'/images/hero_two.png'} alt="about image" />
            </Figure>
            <Overlay>
              <InfoBox>
                <Title>Seraph Station</Title>
                <Text>
                  The Seraph Station project challenged us to design a unique
                  station that would transport people through time. The result
                  is a fresh and futuristic model inspired by space stations.
                </Text>
                <ButtonIcon text="See Our Portfolio" />
              </InfoBox>
            </Overlay>
          </HeroTag>
        </SwiperSlide>

        <SwiperSlide>
          <HeroTag>
            <Figure>
              <Img src={'/images/hero_three.png'} alt="about image" />
            </Figure>
            <Overlay>
              <InfoBox>
                <Title>Federal II Tower</Title>
                <Text>
                  A sequel theme project for a tower originally built in the
                  1800s. We achieved this with a striking look of brutal
                  minimalism with modern touches.
                </Text>
                <ButtonIcon text="See Our Portfolio" />
              </InfoBox>
            </Overlay>
          </HeroTag>
        </SwiperSlide>

        <SwiperSlide>
          <HeroTag>
            <Figure>
              <Img src={'/images/hero_four.png'} alt="about image" />
            </Figure>
            <Overlay>
              <InfoBox>
                <Title>Trinity Bank Tower</Title>
                <Text>
                  Trinity Bank challenged us to make a concept for a 84 story
                  building located in the middle of a city with a high
                  earthquake frequency. For this project we used curves to blend
                  design and stability to meet our objectives.
                </Text>
                <ButtonIcon text="See Our Portfolio" />
              </InfoBox>
            </Overlay>
          </HeroTag>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination"></div>
    </HeroSection>
  );
}

export default Hero;
