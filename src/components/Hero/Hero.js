import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        Hpinger's Portfolio
      </SectionTitle>
      <SectionText>
        Hello, I'm Hamed Najafi AKA Hpinger<br/>
        I'm a full-stack web developer
      </SectionText>
      <Button onClick={()=> window.open('https://www.linkedin.com/in/hamed-najafi-7610411a1/', '_blank')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
