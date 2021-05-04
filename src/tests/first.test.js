import React from 'react'

import {render } from '@testing-library/react'

import Home from '../Components/Home'

it("should render normally",()=>{
    const { asFragment } = render(<Router>
        <GlobalStyle/>
        <Home/>
     </Router>)
})