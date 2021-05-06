import React from 'react';
import styled from 'styled-components';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import {taskFilter} from '../../../../Utils'
import useCurrentTasks from '../../../../Hooks/UseCurrentTasks'

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

    const {state,setState} = useCurrentTasks(tasksArray)
 

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
                                onClick={()=>taskFilter(item.name,setState,state,'success')}
                                />
                                <CancelIcon 
                                style={{color:"#f44336",fontSize:'40px',cursor:"pointer"}}
                                onClick={()=>taskFilter(item.name,setState,state,"cancel")}/>
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