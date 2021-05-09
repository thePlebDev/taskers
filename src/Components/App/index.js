import React from 'react';
import {Switch,Route} from 'react-router-dom'

import Home from '../Home'
import Main from '../Main'


const App =()=>{
    return(
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/main' component={Main} exact />
            </Switch>
    )   
        
}

export default App