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
  LeaderInfo,
  SmallHeading,
  SmallText,
  Row,
  StyledLinkedinIcon,
  StyledTwitterIcon,
} from './leaders.css';

type TLeaderCard = {
  src: string;
  alt: string;
  name: string;
  position: string;
  socials: {
    linkedin: string;
    twitter: string;
  };
};

const leadersData: Array<TLeaderCard> = [
  {
    src: '/images/leaders/leader_one.png',
    alt: 'jake_richards.png',
    name: 'Jake Richards',
    position: 'Chief Architect',
    socials: {
      linkedin: '',
      twitter: '',
    },
  },

  {
    src: '/images/leaders/leader_two.png',
    alt: 'thompson_smith.png',
    name: 'Thompson Smith',
    position: 'Head of Finance',
    socials: {
      linkedin: '',
      twitter: '',
    },
  },

  {
    src: '/images/leaders/leader_three.png',
    alt: 'Jackson_rourke.png',
    name: 'Jackson Rourke',
    position: 'Lead Designer',
    socials: {
      linkedin: '',
      twitter: '',
    },
  },

  {
    src: '/images/leaders/leader_four.png',
    alt: 'maria_simpson.png',
    name: 'Maria Simpson',
    position: 'Senior Architect',
    socials: {
      linkedin: '',
      twitter: '',
    },
  },
];

interface ILeaderCardProps {
  leader: TLeaderCard;
}

const LeaderCard = ({ leader }: ILeaderCardProps) => {
  const { src, alt, name, position, socials } = leader;
  return (
    <Wrapper>
      <Figure>
        <Img src={src} alt={alt} />
        <Overlay>
          <Row>
            <StyledLinkedinIcon />
            <StyledTwitterIcon />
          </Row>
        </Overlay>
      </Figure>
      <LeaderInfo>
        <SmallHeading>{name}</SmallHeading>
        <SmallText>{position}</SmallText>
      </LeaderInfo>
    </Wrapper>
  );
};

function Leaders() {
  return (
    <Section>
      <DivTag>
        <LeadersContainer>
          <InfoWrapper>
            <Text>The Leaders</Text>
          </InfoWrapper>
          <LeadersWrapper>
            {leadersData.map((leader, index) => {
              return <LeaderCard key={index} leader={leader} />;
            })}
          </LeadersWrapper>
        </LeadersContainer>
      </DivTag>
    </Section>
  );
}

export default Leaders;
