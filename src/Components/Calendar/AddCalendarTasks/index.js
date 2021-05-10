import React, { useState } from 'react';
import styled from 'styled-components'

import Form from '../../Form';
import TextInput from '../../Inputs/TextInput'
import {AddTaskButton} from '../../Buttons'

const Container = styled.div`
  background-color:#E8EEF1;
  visibility:${({state})=>state ? "visible":"hidden"};
  transform:${({state})=>state ? "translateY(0px)":"translateY(-5px)"};
  opacity:${({state})=>state ? "1":"0"};
  transition:all 0.35s;
  width:90%;
  max-width: 400px;
  height:50px;
  z-index:9999999999999;
  position:absolute;
  margin:auto;
  top:0;
  bottom:110%;
  left:0;
  border:2px solid #73C2FB;
  border-radius:4px;
  right:0;
  padding-top:14px;
`


//name,value,handleChange,placeholder goes in the textInput


const AddCalendarTasks =({state})=>{
    const [text,setText] = useState({title:""})

    const handleChange = (e)=>{
        const {value,name} = e.target
        setText({...text,[name]:value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        
    }

    return(
        <Container state={state}>
            <Form handleSubmit={handleSubmit}>
                <TextInput placeholder={"Enter task"} name="title" value={text.title} handleChange={handleChange}/>
                <AddTaskButton/>
            </Form>
        </Container>
    )
}


export default AddCalendarTasks