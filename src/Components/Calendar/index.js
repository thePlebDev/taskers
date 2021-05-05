import React from 'react';
import styled from 'styled-components';
import UnderConstruction from '../../Assets/Images/UnderConstruction.png'


const Container = styled.div`
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


const Calendar =()=>{

    return(
        <Container>
            <Text>I am working as fast as I can</Text>
            <Image src={UnderConstruction} alt="this section is under construction"/>
        </Container>
    )
}

export default Calendar