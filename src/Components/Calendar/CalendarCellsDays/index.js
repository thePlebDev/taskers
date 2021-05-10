import React from 'react'

import '../index.css'
import isSameMonth from 'date-fns/isSameMonth'
import isSameDay from 'date-fns/isSameDay'



const CalendarCellsDays=({day,monthStart,startingDay,formattedDate})=>{

    return(
        <div
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

    )
}


export default CalendarCellsDays