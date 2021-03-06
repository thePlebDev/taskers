import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import CurrentTasks from './CurrentTasks'
import TextInput from '../../Inputs/TextInput';


import useTasks from '../../../Hooks/UseTasksAddition'
import {AddTaskButton} from '../../Buttons'
import Form from '../../Form'



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
    height:60px;
    justify-content:space-around;
    position:relative;
    overflow-x:hidden;
    
`

const ItemContainer = styled.div`
    display:flex;
    justify-content:space-around;
    position:absolute;
    top:0;
    width:100%
`
const variants = {
    hidden:{opacity:0},
    visible:{opacity:1},
}



//MAKE THE FORM CONTROLLED  
const Task = ()=>{
   const {handleChange,handleSubmit,state,tasks} = useTasks({title:""})
    return(
        <motion.div initial="hidden" animate="visible" variants={variants}>
            <Container >
                <ItemContainer>
                    <Form handleSubmit={handleSubmit}>
                        <TextInput name={"title"} value={state.title} placeholder={"Enter Task"} handleChange={handleChange}/>
                        <AddTaskButton/>
                    </Form>
                </ItemContainer>
            </Container>
            <CurrentTasks tasksArray={tasks}/>
        </motion.div>
    )
}

export default Task