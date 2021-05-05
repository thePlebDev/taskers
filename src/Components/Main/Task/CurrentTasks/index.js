import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const Container = styled.div`
    border:2px solid #E8EEF1;
    width:90%;
    margin:10px auto;
    height:77vh;
    border-radius:4px;
    overflow-y: auto;
`

const Task = styled.div`
    border-bottom:2px solid #E8EEF1;
    width:100%;
    
    display:flex;
    align-items:center;
    justify-content:space-between;
    text-transform:uppercase;
  

`
const IconContainer= styled.div`

      width:40%;
      display:flex;
      justify-content:flex-end;
      padding-right:5px;
`

const Text = styled.div`
    color:#E8EEF1;
    padding:20px 0;
    text-align:center;
    font-size:40px;
    text-transform:uppercase;

`
const TaskText = styled.div`
    
    padding-left:10px;
`




const CurrentTasks =({tasksArray})=>{
    const [state,setState] = useState([])

    const utilFunc = (name,status)=>{
        setState(state.filter(item=> item.name !== name))
    }

    useEffect(()=>{
        if(tasksArray.name){
            setState([...state,tasksArray])

        }
        
    },[tasksArray])
 

    return(
        <Container>
            {
                state[0]
                    ?
                state.map((item,index)=>{
                    return(
                        <Task key={index}> 
                            <TaskText>{item.name}</TaskText>
                            <IconContainer>
                                <CheckCircleIcon 
                                style={{color:"#4caf50",fontSize:'40px',cursor:"pointer",marginRight:'10px'}}
                                onClick={()=>utilFunc(item.name,'success')}
                                />
                                <CancelIcon 
                                style={{color:"#f44336",fontSize:'40px',cursor:"pointer"}}
                                onClick={()=>utilFunc(item.name,"cancel")}/>
                            </IconContainer>
                         </Task>
                    )
                })
                :
                <Text>you have no tasks</Text>
            }
            
        </Container>
    )
}

export default CurrentTasks