import React,{useState} from 'react';
import styled from 'styled-components';
import subMonths from 'date-fns/subMonths'
import format from 'date-fns/format'
import addMonths from 'date-fns/addMonths'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './index.css'
//import CalendarDays from './CalendarDays'
import RenderCells from './CalendarCells'



import {motion} from 'framer-motion';


const Container = styled(motion.div)`
    width:90%;
    margin:10px auto;
    border:2px solid #E8EEF1;
    height:85vh;
    border-radius:4px;
`

const variants = {
    hidden:{opacity:0},
    visible:{opacity:1},
}


const Calendar =()=>{
    const [currentMonth,setCurrentMonth] = useState(new Date())
    //const [currentDate,setCurrentDate] = useState(new Date())

  const dateFormat = "MMMM yyyy";

  const prevMonth = () => {
    setCurrentMonth(
        subMonths(currentMonth, 1) //subtract the specified number of months from the given date
    );
  };
    
  const nextMonth = () => {
    setCurrentMonth(
      addMonths(currentMonth, 1) // add specified number of months to the given date
    );
  };

    return (
    <Container className="calendar" initial="hidden" animate="visible" variants={variants}>
        <div className="header row flex-middle">
            <div className="col col-start">
            <div className="icon" onClick={()=>prevMonth()}>
                <ArrowBackIcon/>
            </div>
            </div>
            <div className="col col-center">
            <span>{format(currentMonth, dateFormat)} </span>
            </div>
            <div className="col col-end" onClick={()=>nextMonth()}>
            <div className="icon">
                <ArrowForwardIcon />
            </div>
            </div>
      </div>
      <RenderCells currentMonth={currentMonth}/>
    </Container>
      
    );
    }
//RangeError: Invalid time value  
export default Calendar