import React from 'react';
import styled from 'styled-components';

import AddCircleIcon from '@material-ui/icons/AddCircle';

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


const AddTaskButton =()=>{
    return(
        <Button type="submit">
            <AddCircleIcon 
                style={{fontSize:'35px',color:'#73C2FB',marginTop:'5px',marginRight:'5px',cursor:'pointer'}}
                type="submit"
                />
        </Button>
    )
}

export default AddTaskButton