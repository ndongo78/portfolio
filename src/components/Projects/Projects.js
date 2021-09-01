import React from 'react';

import { BlogCard,Status, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyle';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="project">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    {
        projects.map((item,i)=>(
            <BlogCard key={i}>
                  <Img src={item.image} />
                 
            <TitleContent>
              <HeaderThree title>{item.title}</HeaderThree>
              <Hr />
              <Status> {item.status !=='Terminé' ? item.status : null} </Status>
            </TitleContent>
            <CardInfo className="card-info">{item.description}</CardInfo>
            <div style={{margin:8}}>
              <TitleContent >Technologies</TitleContent>
              <TagList>
                {item.tech.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={item.demo} target='_blank'>Démo</ExternalLinks>
              <ExternalLinks href={item.code} target='_blank'>Code source</ExternalLinks>
            </UtilityList>
            </BlogCard>
        ))
    }
    </GridContainer>
  </Section>
);

export default Projects;