import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

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


const TextInput =({name,value,handleChange,placeholder})=>{

    return(
        <>
        <label htmlFor={name}/>
        <Input id={name}placeholder={placeholder} 
        name={name}value={value} 
        onChange={(e)=>{handleChange(e)}}/>
        </>
    )
}

TextInput.propTypes = {
    name: PropTypes.string,
    value:PropTypes.string,
    handleChange:PropTypes.func,
    placeholder:PropTypes.string
}

export default TextInput