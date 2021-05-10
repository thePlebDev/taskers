
import React,{useState} from 'react';
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek'
import isSameMonth from 'date-fns/isSameMonth'
import isSameDay from 'date-fns/isSameDay'
import addDays from 'date-fns/addDays'

import format from 'date-fns/format'
import CalendarCellsDays from '../CalendarCellsDays'



const RenderCells =({currentMonth})=> {
    //const { currentMonth, selectedDate } = this.state;
    const [startingDay,setStartingDay] = useState({selectedDate:''})

    const onDateClick = day => {
        setStartingDay({
          selectedDate: day
        });
      };

    const monthStart = startOfMonth(currentMonth); //returns the start of a month
    const monthEnd = endOfMonth(monthStart); // returns the end of a month
    const startDate = startOfWeek(monthStart); // returns the start of a week
    const endDate = endOfWeek(monthEnd); // returns the end of the week

    const dateFormat = "d";
    const rows = []; // this is the array that will hold everything 

    let days = []; // holds an array of all the 
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <CalendarCellsDays day={day} monthStart={monthStart} startingDay={startingDay} formattedDate={formattedDate}/>
        );
        day = addDays(day, 1);
        
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    
    return <div className="body">{rows}</div>;
  }

  export default RenderCells