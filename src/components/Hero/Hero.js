import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <Section row nopadding id={'welcome'}>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        Hpinger's Portfolio
      </SectionTitle>
      <SectionText>
        Hello, I'm Hamed Najafi AKA Hpinger<br/>
        I'm a full-stack web developer<br/>
        Most of my works are for banks so due to confidentiality reasons I can't put them here
      </SectionText>
      <Button onClick={() => window.open('/files/Hamed_Resume.pdf','_blank')} >
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
