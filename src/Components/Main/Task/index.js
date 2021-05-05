import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import TimerWidget from './TaskWidgetTimer'


const Container = styled.div`
    border:2px solid #E8EEF1;
    width:90%;
    margin:10px auto;
    border-radius:4px;
    padding:5px;
    overflow-y: hidden;
    display:flex;
    flex-direction:column;
    transition:all 0.35s;
    height:${({state})=>state? '160px': '40px'};
    justify-content:space-around;
    position:relative;
    overflow-x:hidden;
    
`

const Input = styled.input`
    margin-top:10px;
    outline:none;
    background-color:transparent;
    padding:2px 6px;
    border:none;
    border-bottom:1px solid #73C2FB;
    font-size:15px;
    color: #73C2FB;
    width:90%;

`

const ItemContainer = styled.div`
    display:flex;
    justify-content:space-around;
    position:absolute;
    top:0;
    width:100%
`
const ItemContainer2 = styled.div`
 
    position:absolute;
    top:50px;

`
const Form = styled.form`
    width:90%;
`

const Button = styled.button`
    padding:0.5rem 1rem;
    font-size:1rem;
    color:#73C2FB;
    border:2px solid #73C2FB;
    border-radius:4px;
    outline:none;
    cursor:pointer;
    background:transparent;
    width:110px;
    text-transform:uppercase;
    @media only screen and (min-width: 1140px) {
        margin-left:10px;
      }
`





//MAKE THE FORM CONTROLLED  
//refactor to use custom hooks
const Task = ()=>{
    const [clicked,setClicked] = useState(false)
    const node = useRef()

    const handleClick = e =>{
        if(!node.current.contains(e.target)){
            setClicked(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown",handleClick);

        return()=>{
            document.removeEventListener("mousedown",handleClick)
        }
    },[])

    return(
        <Container state={clicked} ref={node}>
            <ItemContainer>
                <Form>
                    <label htmlFor="title" />
                    <Input id="title" placeholder="Task Description"/>
                </Form>
                <AddCircleIcon style={{fontSize:'35px',color:'#73C2FB',marginTop:'5px',marginRight:'5px'}} onClick={()=>setClicked(true)}/>
            </ItemContainer>
            <ItemContainer2>
                <Button type="submit">Submit</Button>
            </ItemContainer2>

        </Container>
    )
}

export default Task