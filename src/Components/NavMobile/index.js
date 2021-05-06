import React,{useRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


import NavItem from '../Nav/NavItem'
import useClickDetectionMobile from '../../Hooks/useClickDetectionMobileNav'
import {NavigationData} from '../../Data'

const Container = styled.div`
      position:absolute;
      width:200px;
      margin-top:50px;
      height:88vh;
      background-color:white;
      border:2px solid #73C2FB;
      z-index:9999999999;
      transition: all 0.3s;
      transform: ${({state})=> state ? "translateX(0px)" :"translateX(-220px)"};
      @media only screen and (min-width: 700px) {
        display:none;
      }

`

const MobileNav = ({state,setState,setNav})=>{
    const node = useRef()

    useClickDetectionMobile(node,setNav)

    return(
        <Container state={state} ref={node}>
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

MobileNav.propTypes = {
    setState: PropTypes.func,
    state: PropTypes.bool,
    setNav: PropTypes.func,
}

export default MobileNav