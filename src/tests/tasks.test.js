//THIS IS GOING TO TEST THE TASKS
import React from 'react';
import {render,screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import Tasks from '../Components/Main/Task'




describe("Testing to make sure that Tasks works normally",()=>{

    test("it should render normally",()=>{
        render(<Tasks />) // renders our component into a container that is appended to the document.body
        expect(screen.getByText("you have no tasks")).toBeTruthy()
        
    })

    test("it should add to the task",()=>{
        render(<Tasks />)
        // we need to grab the input and then add a task then submit it and then we need to 
        userEvent.type(screen.getByRole("textbox"),"hello world!")
        expect(screen.getByRole('textbox')).toHaveValue('hello world!')
        // now we have to fire the submit button
        // expect(screen.getByRole("button")).toBeInTheDocument()
        userEvent.click(screen.getByRole("button"))
        expect(screen.getByText())
    })

})