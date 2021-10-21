import React from 'react';
import { DiFirebase, DiReact, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id={'tech'}>
    <SectionDivider/>
    <br/>
    <SectionTitle> Technologies</SectionTitle>
    <SectionText> i have worked with many different libraries in javaScript</SectionText>
    <List>
      <ListItem>
        <DiReact size={'3rem'}/>
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            ReactJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>

        <DiFirebase size={'3rem'}/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node and database
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size={'3rem'}/>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Android java
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
