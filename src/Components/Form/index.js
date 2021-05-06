import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Form.propTypes ={
    children:PropTypes.array,
    handleSubmit:PropTypes.func
}


export default Form