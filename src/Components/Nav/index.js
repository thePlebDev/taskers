import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

import {NavigationData} from '../../Data'


const Container = styled.div`
    height:88vh;
    border:2px solid #73C2FB;
    margin-left:10px;
    width:400px;
    display:none;
    background-color:white;
    margin-top:50px;
    border-radius:4px;
    @media only screen and (min-width: 700px) {
        display:block
      }

`

const Nav = ({setState})=>{

    return(
        <Container>
            {
                NavigationData.map((item,index)=>{
                    return(
                        <NavItem key={index} title={item.name} icon={item.icon} setState={setState}/>
                    )
                })
            }
            

        </Container>
    )
}

Nav.propTypes = {
    setState: PropTypes.func
}

export default Nav