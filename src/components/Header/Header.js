import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiFillLinkedin,AiFillFacebook,AiFillGithub} from 'react-icons/ai'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './NavStyle';

const NavBar = () => {
    return (
        <Container>
            <Div1>
                <Link href='/'>
                    <a style={{borderRadius: '50%', backgroundColor:'white'}} >
                      <Image src='/images/logo.png' width={50} height={50}  />
                    </a>
                </Link>
            </Div1>
            <Div2>
            <li>
                <Link href="#project">
                <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech">
                <NavLink>Technologies</NavLink>
                </Link>
            </li>        
            <li>
                <Link href="#about">
                <NavLink>About</NavLink>
                </Link>
            </li>        
            </Div2>
            <Div3>
                <SocialIcons href='https://www.linkedin.com/in/dahirou-ndongo-9b26ab162' target='_blank'>
                   <AiFillLinkedin size='3rem' />
                </SocialIcons>
                <SocialIcons href='https://www.facebook.com/billy.mary.37' target='_blank'>
                 <AiFillFacebook size='3rem' />
                </SocialIcons>
                <SocialIcons href='https://github.com/ndongo78' target='_blank'>
                    <AiFillGithub size='3rem' />
                </SocialIcons>
            </Div3>
        </Container>
    )
}

export default NavBar
