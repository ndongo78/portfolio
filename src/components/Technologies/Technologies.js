import Image from 'next/image';
import React from 'react';
import { DiBootstrap, DiCss3, DiHtml5, DiReact, DiZend, DiPhp, DiNodejs,   DiMysql, DiMongodb } from 'react-icons/di';
import {FaVuejs} from 'react-icons/fa'
import {SiNodeDotJs, SiLaravel,SiMaterialUi,SiAdobexd,SiAdobephotoshop} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    J'ai travaillé avec une gamme de technologies dans le monde du développement Web. 
    Du back-end à la disign
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <picture> <DiHtml5 size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Html5</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <DiCss3 size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Css</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <SiNodeDotJs size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Javascript</span>
          </ListParagraph>
          
          <ListParagraph>
            <picture> <DiReact size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>React.js</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <DiReact size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>React Native</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <FaVuejs size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Vue.js</span>
          </ListParagraph>
          
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <picture> <DiNodejs size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Node.js</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <SiNodeDotJs size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Express.js</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <DiPhp size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>PHP</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <SiLaravel size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Laravel</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <DiMysql size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Mysql</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <DiMongodb size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Mongo DB</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            <picture> <SiAdobexd size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Adobe xd</span>
          </ListParagraph>
          <ListParagraph>
            <picture> <SiAdobephotoshop size='3rem'  /> </picture>
            <span style={{marginLeft: 10}}>Photoshop</span>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
