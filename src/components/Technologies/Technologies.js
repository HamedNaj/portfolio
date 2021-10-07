import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id={'tech'}>
    <SectionDivider/>
    <br/>
    <SectionTitle> Technologies</SectionTitle>
    <SectionText> i have worked with many different libraries in javaScript so im pretty good at java script</SectionText>
    <List>
      <ListItem>
        <DiFirebase size={'3rem'}/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            ReactJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size={'3rem'}/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={'3rem'}/>
        <ListContainer>
          <ListTitle>UI/Ux</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
