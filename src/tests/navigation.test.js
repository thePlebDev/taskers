import React from 'react';
import {render,screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Main from '../Components/Main'


describe("testing the functionality of main nav",()=>{
    it('should render normally',()=>{
        render(<Main/>)
        expect(screen.getByText("you have no tasks")).toBeTruthy();
    })

    
})
