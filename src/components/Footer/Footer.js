import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

import {Div3, SocialIcons} from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={'tel:00989122544307'}>+989122544307</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={'mailto:Hamed.Najafi.Haghi@gmail.com'}>Hamed.Najafi.Haghi@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
        {/*<SocialIconsContainer>*/}
          {/*<CompanyContainer>*/}
            {/*<Slogan>*/}
              {/*Innovating projects*/}
            {/*</Slogan>*/}
          {/*</CompanyContainer>*/}
          {/*<SocialContainer>*/}
            {/*<SocialIcons target="_blank" href={'https://github.com/HamedNaj?tab=repositories'}>*/}
              {/*<AiFillGithub size={'3rem'}/>*/}
            {/*</SocialIcons>*/}
            {/*<SocialIcons target="_blank" href={'https://linkedin.com'}>*/}
              {/*<AiFillLinkedin size={'3rem'}/>*/}
            {/*</SocialIcons>*/}
            {/*/!*<SocialIcons target="_blank" href={'https://instagram.com'}>*/}
              {/*<AiFillInstagram size={'3rem'}/>*/}
            {/*</SocialIcons>*!/*/}
          {/*</SocialContainer>*/}
        {/*</SocialIconsContainer>*/}
    </FooterWrapper>
  );
};

export default Footer;
