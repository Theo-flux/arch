'use client';
import React from 'react';
import { Section, DivTag } from '@/shared';
import {
  PortfolioInner,
  Figure,
  Img,
  Overlay,
  InfoContainer,
  InfoText,
  SmallText,
} from './portfolio.css';

const portfolioData = [
  {
    src: '/images/port_1.png',
    alt: 'seraph-station.png',
    name: 'Seraph Station',
    date: 'September 2019',
  },

  {
    src: '/images/port_2.png',
    alt: 'eebox-building.png',
    name: 'Eebox Building',
    date: 'August 2017',
  },
  {
    src: '/images/port_3.png',
    alt: 'federal-II-tower.png',
    name: 'Federal II Tower',
    date: 'March 2017',
  },

  {
    src: '/images/port_4.png',
    alt: 'project-del-sol.png',
    name: 'Project Del Sol',
    date: 'January 2016',
  },

  {
    src: '/images/port_5.png',
    alt: 'le-prototype.png',
    name: 'Le Prototype',
    date: 'October 2015',
  },

  {
    src: '/images/port_6.png',
    alt: '228b-tower.png',
    name: '228B Tower',
    date: 'April 2015',
  },

  {
    src: '/images/port_7.png',
    alt: 'grand-edelweis-hotel.png',
    name: 'Grand Eedelweis Hotel',
    date: 'December 2013',
  },

  {
    src: '/images/port_8.png',
    alt: 'netcry-tower.png',
    name: 'Netcry Tower',
    date: 'August 2012',
  },

  {
    src: '/images/port_9.png',
    alt: 'hypers.png',
    name: 'Hypers',
    date: 'January 2012',
  },

  {
    src: '/images/port_10.png',
    alt: 'sxiv-tower.png',
    name: 'SXIV Tower',
    date: 'March 2011',
  },

  {
    src: '/images/port_11.png',
    alt: 'trinity-bank-tower.png',
    name: 'Trinity Bank Tower',
    date: 'September 2010',
  },

  {
    src: '/images/port_12.png',
    alt: 'project-paramour.png',
    name: 'Project Paramour',
    date: 'February 2008',
  },
];

function Portfolio() {
  return (
    <Section>
      <DivTag>
        <PortfolioInner>
          {portfolioData.map((portfolio, _) => {
            const { src, alt, name, date } = portfolio;
            return (
              <Figure key={alt}>
                <Img src={src} alt={alt} />
                <Overlay>
                  <InfoContainer>
                    <InfoText>{name}</InfoText>
                    <SmallText>{date}</SmallText>
                  </InfoContainer>
                </Overlay>
              </Figure>
            );
          })}
        </PortfolioInner>
      </DivTag>
    </Section>
  );
}

export default Portfolio;
