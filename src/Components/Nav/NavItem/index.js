import React,{useRef} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useClickDetection from '../../../Hooks/UseClickDetection'

const ItemContainer = styled.div`
      display:flex;
      justify-content:space-around;
      align-items:center;
      cursor:pointer;
      padding:20px 0;
      background-color:${({state})=>state? "#E8EEF1" : "white"};
`
const Text = styled.h2`
      color:#73C2FB;
      text-transform:uppercase;
`



const NavItem =({title,icon,setState})=>{
    const node = useRef()

    const {clicked,setClicked} = useClickDetection(node,title,setState)

    return(
        <ItemContainer state={clicked} onClick={()=>setClicked(true)} ref={node}>
            <Text>{title}</Text>
            {icon}
        </ItemContainer>
    )
}

NavItem.propTypes = {
    setState: PropTypes.func,
    title: PropTypes.string,
    icon: PropTypes.any,
}

export default NavItem;