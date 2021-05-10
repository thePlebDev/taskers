import React,{useState} from 'react'
import styled from 'styled-components'

import '../index.css'
import isSameMonth from 'date-fns/isSameMonth'
import isSameDay from 'date-fns/isSameDay'
import format from 'date-fns/format'

import AddCalendarTasks from '../AddCalendarTasks'



//format(day, "EEEE-dd-MMMM-yyyy")


const CalendarCellsDays=({day,monthStart,startingDay,formattedDate})=>{
    const [state,setState] = useState(false)

    const handleClick=()=>{
      setState(true)
    }

    return(
        <>
        <AddCalendarTasks state={state} />
        <div onClick={()=>handleClick()}
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, startingDay.selectedDate) ? "selected" : ""
            }`}
            key={day}
            
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            
          </div>

          </>
    )
}


export default CalendarCellsDays