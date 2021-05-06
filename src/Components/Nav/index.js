import React from 'react';
import styled from 'styled-components'


import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EventIcon from '@material-ui/icons/Event';
import NavItem from './NavItem'


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




const Nav = ({setState})=>{

    return(
        <Container>
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

export default Nav