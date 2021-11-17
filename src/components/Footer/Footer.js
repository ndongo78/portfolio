import React from 'react';
import { AiFillFacebook, AiFillGithub, AiOutlineCopyrightCircle, AiFillLinkedin } from 'react-icons/ai';
import {SectionTitle} from '../../styles/GlobalComponents'
import { SocialIcons } from '../Header/NavStyle';
import {  FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan } from './FooterStyle';

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionTitle>Me contacter</SectionTitle>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Téléphone</LinkTitle>
          <LinkItem href="tel:0033628182420">336-28-18-24-20</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ndongodahs@yahoo.fr">
            ndongodahs@yahoo.fr
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
         <LinkTitle>Réseau sociaux</LinkTitle>
          <span style={{display:'flex'}}>
            <SocialIcons href='https://www.linkedin.com/in/dahirou-ndongo-9b26ab162' target='_blank'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.facebook.com/billy.mary.37' target='_blank'>
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://github.com/ndongo78' target='_blank'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          </span>
        </LinkColumn>
        
      </LinkList>
       <Slogan>NDONGO <AiOutlineCopyrightCircle style={{marginTop: 8}} /> {new Date().getFullYear()} </Slogan>
    </FooterWrapper>
  );
};

export default Footer;

