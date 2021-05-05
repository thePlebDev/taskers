import React from 'react';
import styled from 'styled-components';

const Container = styled.form`
    width:90%;
`



const Form =({children,handleSubmit})=>{

    return(
        <Container onSubmit={(e)=>{handleSubmit(e)}}>
            {children}
        </Container>
    )
}


export default Form