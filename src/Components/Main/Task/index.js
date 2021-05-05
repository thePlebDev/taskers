import React,{useState} from 'react';
import styled from 'styled-components';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import CurrentTasks from './CurrentTasks'


const Container = styled.div`
    border:2px solid #E8EEF1;
    width:90%;
    margin:10px auto;
    border-radius:4px;
    padding-bottom:10px;
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
    color: rgba(0,0,0,0.5);
    width:80%;

`

const ItemContainer = styled.div`
    display:flex;
    justify-content:space-around;
    position:absolute;
    top:0;
    width:100%
`

const Form = styled.form`
    width:90%;
`

const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:transparent;
    border:none;
    outline:none;
    position:absolute;
    top:0;
    right:0px;
`



//MAKE THE FORM CONTROLLED  
const Task = ()=>{

    const [tasks,setTasks] = useState({})
    const [state,setState] = useState({title:''})

    const handleChange=(e)=>{
        const {value,name} = e.target;

        setState({...state,[name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        setTasks({...tasks,name:state.title})
    }

    return(
        <div>
            <Container >
                <ItemContainer>
                    <Form onSubmit={(e)=>handleSubmit(e)}>
                        <label htmlFor="title" />
                        <Input id="title" placeholder="Task Description" 
                        name="title" value={state.title}
                        onChange={(e)=>{handleChange(e)}}
                        />
                    
                    <Button type="submit">
                        <AddCircleIcon 
                            style={{fontSize:'35px',color:'#73C2FB',marginTop:'5px',marginRight:'5px',cursor:'pointer'}}
                            type="submit"
                            />
                    </Button>
                    </Form>
                </ItemContainer>
            </Container>
            <CurrentTasks tasksArray={tasks}/>
        </div>
    )
}

export default Task