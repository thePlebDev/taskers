import React from 'react';
import startOfWeek from 'date-fns/startOfWeek'
import addDays from 'date-fns/addDays'

import format from 'date-fns/format'
import '../index.css'



const RenderDays =({currentMonth})=> {
    const dateFormat = "dddd";
    const days = [];

    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  export default RenderDays