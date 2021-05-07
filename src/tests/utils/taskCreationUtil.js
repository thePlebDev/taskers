import userEvent from '@testing-library/user-event'
import React from 'react';
import {render,screen} from "@testing-library/react"
import '@testing-library/jest-dom'


import Tasks from '../../Components/Main/Task'

const renderSetUp = ()=>{
    render(<Tasks />)
    // we input
    userEvent.type(screen.getByRole("textbox"),"hello world!")

    
    //we fire the event
    userEvent.click(screen.getByRole("button"))

}


export default renderSetUp