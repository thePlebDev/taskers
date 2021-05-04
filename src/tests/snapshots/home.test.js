import React from 'react' 
import { BrowserRouter as Router } from "react-router-dom"
import { render } from '@testing-library/react' // the custom render wasnt working 
import GlobalStyle from '../../Styles/global'

import Home from '../../Components/Home'

it("should render the snapshot",()=>{
    const { asFragment } = render(<Router>
                                    <GlobalStyle/>
                                    <Home/>
                                 </Router>)

     const obj = render(<Home/>)
    
   expect(asFragment()).toMatchSnapshot()
})