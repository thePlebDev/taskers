import React,{useState} from 'react';
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

import Nav from '../Nav'
import MainConditional from '../MainConditional'
import MobileNav from '../NavMobile'

const Container = styled.div`
    position:relative;
    display:flex;
`
const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    height:60px;
    width:60px;
    right:0px;
    top:-5px;
    @media only screen and (min-width: 700px) {
        display:none;
      }
`


const SubContainer = styled.div`
    background-color:white;
    height:88vh;
    width:90%;
    margin:50px auto;
    margin-left:auto;
    margin-right:auto;
    border-radius:4px;
    border:2px solid #73C2FB;
    @media only screen and (min-width: 700px) {
        width:71%;
        margin-left:10px;
        margin-right:10px;
      }
`



const TaskContainer =styled.div`
      display:flex;
      width:100%;
      justify-content:center;
`




const Main = ()=>{
    const [state,setState] = useState('tasks')
    const [nav,setNav] = useState(false)

    return(
        <Container>
            <MobileNav state={nav} setState={setState} setNav={setNav}/>
            <IconContainer>
                <MenuIcon style={{fontSize:'50px',color:'#73C2FB'}} onClick={()=>setNav(!nav)}/>
            </IconContainer>
            <TaskContainer>
                <Nav setState={setState}/>
                <SubContainer>
                    {
                    MainConditional[state]
                    }
                </SubContainer>
            </TaskContainer>
        </Container>
    )
}

export default Main