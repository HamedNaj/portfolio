import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {DiJavascript} from 'react-icons/di';

import {Container, Div1, Div2, Div3, NavLink, SocialIcons,Span} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href={'#welcome'}>
        <a style={{display: 'flex', alignItems: 'center', color: 'white'}}>
          <DiJavascript size={'3rem'}/> <Span>Hpinger</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={'#projects'}>
          <NavLink> Projects</NavLink>
        </Link>
      </li>
      <li>

        <Link href={'#tech'}>
          <NavLink> Technologies</NavLink>
        </Link>
      </li>
      <li>

        <Link href={'#about'}>
          <NavLink> About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target="_blank" href={'https://github.com/HamedNaj'}>
        <AiFillGithub size={'3rem'}/>
      </SocialIcons>
      <SocialIcons target="_blank" href={'https://www.linkedin.com/in/hamed-najafi-7610411a1/'}>
        <AiFillLinkedin size={'3rem'}/>
      </SocialIcons>
      {/*<SocialIcons href={'https://instagram.com'}>*/}
        {/*<AiFillInstagram size={'3rem'}/>*/}
      {/*</SocialIcons>*/}
    </Div3>
  </Container>
);

export default Header;
