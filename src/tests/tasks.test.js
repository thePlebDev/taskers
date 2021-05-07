//THIS IS GOING TO TEST THE TASKS
import React from 'react';
import {render,screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Tasks from '../Components/Main/Task'
import renderSetUp from './utils/taskCreationUtil'





describe("Testing to make sure that Tasks works normally",()=>{

    test("it should render normally",()=>{
        render(<Tasks />) // renders our component into a container that is appended to the document.body
        expect(screen.getByText("you have no tasks")).toBeTruthy()
        
    })

    test("it should add to the task",()=>{
       
        renderSetUp()

        //so screen is pre bound to the document that render spits out.
        //screen is definetly doing some movie time magic behind the scenes 
        expect(screen.getByTestId("testTitle")).toBeInTheDocument()


    })

    test("it should test the sucess deletion of tasks",()=>{
        renderSetUp()
    
        userEvent.click(screen.getByTestId("success"))
        expect(screen.getByText("you have no tasks")).toBeTruthy()
    })

    test("it should test the cancel deletion of tasks",()=>{
        renderSetUp()
    
        userEvent.click(screen.getByTestId("cancel"))
        expect(screen.getByText("you have no tasks")).toBeTruthy()
    })

})