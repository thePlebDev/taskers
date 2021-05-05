import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components';

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



const NavItem =({title,icon})=>{
    const [clicked,setClicked] = useState(false)
    const node = useRef()

    const handleClick = e =>{
        if(node.current.contains(e.target)){
            setClicked(true)
        }else{
            setClicked(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown",handleClick)

        return()=>{
            document.removeEventListener("mousedown",handleClick);
        }

    },[])



    return(
        <ItemContainer state={clicked} onClick={()=>setClicked(true)} ref={node}>
            <Text>{title}</Text>
            {icon}
        </ItemContainer>
    )
}

export default NavItem;