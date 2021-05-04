import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import TaskList from '../../Assets/Images/taksListPic.png'

const Container = styled.footer`
    height:400px;
    width:90%;
    margin:0 auto;
    display:grid;
    justify-content:center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

const Text = styled.h1`
    font-size:4rem;
`

const Button = styled.button`
    padding:1rem 1rem;
    font-size:1rem;
    color:#73C2FB;
    border:2px solid #73C2FB;
    border-radius:4px;
    outline:none;
    cursor:pointer;
    background:transparent;
    width:200px;
    text-transform:uppercase;
`

const Image = styled.img`
    height:400px;
    align-self:center;
    justify-self:end;
    display:none;
    @media only screen and (min-width: 800px) {
        display:block;
      }
`





const Footer =()=>{
    return(
        <Container>  
            <div>
                <Text>Give us a try</Text>
                <Link to="/main">
                         <Button>Try Taskter today</Button>
                    </Link> 
            </div>
            <Image src={TaskList} />
        </Container>
    )
}


export default Footer