import React, { useState, useRef, useEffect } from 'react';

import { Button } from './AboutStyle';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const About = () => {

  return (
    <Section id="about">
      <SectionTitle>À propos de moi</SectionTitle>
      <SectionText>
      Passionné par l'informatique depuis toujours,
      j'ai mis tout en oeuvre pour percer dans cette voie en me formant et de développer de divers  projects.
      Mon expérience acquise au fil des projets me permet de mieux comprendre les attentes d'un client et de répondre précisement au besoin demandé en fonction du domaine d'activité.
      En travaillant avec les clients, mon objectif est toujours de fournir une expérience incroyable avec le meilleur niveau de qualité et de service.
      J'adore apprendre les nouvelles technologies, quels problèmes résolvent-elles et comment puis-je les utiliser pour créer de meilleurs produits  et évolutifs.
      </SectionText>
      {/* <Button>
          <a href='/images/DAHIROUNDONGO.pdf' download='cv' style={{color:'#d4c0c0'}} >Mon cv</a>
        </Button> */}
      <SectionDivider />
      <div style={{margin:20}}></div>
    </Section>
  );
};

export default About;
