import React,{useRef,useEffect} from 'react';
import styled from 'styled-components';

import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EventIcon from '@material-ui/icons/Event';
import NavItem from '../Nav/NavItem'

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

const data = [
    {
        name:'tasks',
        icon:<NotificationsActiveIcon style={{fontSize:"40px",color:"#73C2FB"}}/>
    },
    {
        name:'calendar',
        icon:<EventIcon style={{fontSize:"40px",color:"#73C2FB"}}/>
    },

]

const MobileNav = ({state,setState,setNav})=>{
    const node = useRef()

    const handleClick =(e)=>{
        if(node.current.contains(e.target)){

        }else{
            setNav(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown",handleClick);

        return ()=>{
                document.removeEventListener("mousedown",handleClick);
        }
    })

    return(
        <Container state={state} ref={node}>
            {
                data.map((item,index)=>{
                    return(
                        <NavItem title={item.name} icon={item.icon} setState={setState}/>
                    )
                })
            }
        </Container>
    )
}

export default MobileNav