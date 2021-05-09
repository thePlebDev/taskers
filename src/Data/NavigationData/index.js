import React from 'react'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EventIcon from '@material-ui/icons/Event';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const iconStyles ={
    "font-size":"40px",
    "color":"#73C2FB"
}

// UPDATES HERE ALSO REQUIRE UPDATES TO THE MAINCONDITIONAL COMPONENT
const NavigationData =[
    {
        name:'tasks',
        icon:<NotificationsActiveIcon style={iconStyles}/>
    },
    {
        name:'calendar',
        icon:<EventIcon style={iconStyles}/>
    },
    {
        name:'donate',
        icon:<MonetizationOnIcon style={iconStyles}/>
    },

]


export default NavigationData