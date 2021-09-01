import React from 'react';
import Typed from 'typed.js';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
    const el=React.useRef(null)
     React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                `Développeur Full Stack `,
                 `Web et Mobile`
                  ], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop:true
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };
     }, [])


     return (
          <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         <span>Bonjour</span> <br />
         <span style={{marginTop:10}}>Je Suis Dahirou Ndongo</span> <br/>
          <span ref={el} style={{marginTop:10}}></span>
        </SectionTitle>
        
        <SectionText>
        Passionné par l'informatique depuis toujours, je souhaite développer les compétences acquises qui correspondent à vos attentes
        </SectionText>
        <Button onClick={()=>window.location.href='#about'}>Voir plus</Button>
      </LeftSection>
    </Section>
  </>
     )
 
};

export default Hero;