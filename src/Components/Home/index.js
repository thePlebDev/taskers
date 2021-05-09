import React from 'react';
import styled from 'styled-components'
import {Link} from "react-router-dom";

import { motion } from 'framer-motion';

import LandingImage from '../../Assets/Images/LandingImage.png'
import Info from '../Info'
import Footer from '../Footer'


const Container = styled.div`
    height:100vh;
    width:90vw;
    margin:0 auto;
    font-size:30px;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
 
    text-align:center;


`

const Title = styled(motion.h1)`
    margin-top:5rem;
    margin-bottom:0.5rem;
    color: #73C2FB;
    opacity:0;
   
`
const Desc = styled(motion.p)`
    margin-top:60px;
    font-size:3rem;
    font-weight:400;
    opacity:0;
`
const Button = styled(motion.button)`
    padding:1rem 3rem;
    font-size:1rem;
    color:#73C2FB;
    border:2px solid #73C2FB;
    border-radius:4px;
    outline:none;
    cursor:pointer;
    background:transparent;
    opacity:0;
`
const SecondContainer = styled.div`
z-index:9999999;

`
const Image = styled(motion.img)`
    
    width:120%;
    position:absolute;
    right:-100vw;
    bottom:40%;
    @media only screen and (min-width: 1000px) {
        bottom:0;
    }

    
`


// the purple color #6C63FF

const Desc2 = styled(Desc)`
    font-size:2rem;
    margin-top:40px;
`
const ThirdContainer = styled.div`
    position:relative;
    display:none;
    @media only screen and (min-width: 500px) {
        display:block;
    }
`





const Home = ()=>{
    return(
        <div>
        <Container>
            <SecondContainer>
                <Title 
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}>Taskers</Title>
                    <Desc
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}>Time management for busy people</Desc>
                    <Desc2
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2 }}>Easy to use time Management software for people on the go</Desc2>  
                    <Link to="/main">
                         <Button
                         animate={{ opacity: 1 }}
                         transition={{ ease: "easeOut", duration: 2 }}>Try Taskter today</Button>
                    </Link>              
                
            </SecondContainer>
           <ThirdContainer>
               <Image src={LandingImage} animate={{ right: 0 }} transition={{ ease: "easeOut" }}/>
           </ThirdContainer>
        </Container>
        <Info/>
        <Footer/>
        </div>
    )

}


export default Home