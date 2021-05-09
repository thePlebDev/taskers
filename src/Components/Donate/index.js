import React from "react"
import styled from 'styled-components'
import {motion} from 'framer-motion';

import UnderConstruction from '../../Assets/Images/UnderConstruction.png'

const Container = styled(motion.div)`
    width:90%;
    margin:10px auto;
    border:2px solid #E8EEF1;
    height:85vh;
    border-radius:4px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Text = styled.h1`
    text-align:center;
    color:#73C2FB;

`
const Image = styled.img`
    height:180px;
    width:200px;
    
`
const variants = {
    hidden:{opacity:0},
    visible:{opacity:1},
}

const Donate = ()=>{

    return(
        <Container initial="hidden" animate="visible" variants={variants}>
            <Text>Our developers are working overtime </Text>
           <Image src={UnderConstruction} alt="site is under Construction" />
        </Container>
    )
}


export default Donate