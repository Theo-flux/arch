'use client';
import React from 'react';
import { Section, ArchWhiteLogo, ButtonIcon } from '@/shared';
import {
  FooterTag,
  FooterWrapper,
  LogoPod,
  ButtonPod,
  FooterItems,
  FooterRow,
  StyledLink,
  StyledLinkText,
} from './footer.css';

function Footer() {
  return (
    <Section>
      <FooterTag>
        <FooterWrapper>
          <LogoPod>
            <ArchWhiteLogo />
          </LogoPod>

          <FooterRow>
            <FooterItems>
              <StyledLink href={'/'}>
                <StyledLinkText>Portfolio</StyledLinkText>
              </StyledLink>
              <StyledLink href={'/'}>
                <StyledLinkText>About us</StyledLinkText>
              </StyledLink>
              <StyledLink href={'/'}>
                <StyledLinkText>Contact</StyledLinkText>
              </StyledLink>
            </FooterItems>

            <ButtonPod>
              <ButtonIcon text="See Our Portflio" />
            </ButtonPod>
          </FooterRow>
        </FooterWrapper>
      </FooterTag>
    </Section>
  );
}

export default Footer;
