import React from 'react';
import {render} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from '../../Styles/global'

const AllTheProvider = ({ children })=>{
    return(
        <Router>
            <GlobalStyle/>
            {children}
        </Router>
    )
}

const customRender = (ui,options)=>{
    render(ui,{wrapper:AllTheProvider,...options})
}

//re-export everything. This means that we can import everything from here
export * from '@testing-library/react'

// override render method
export { customRender as render }
