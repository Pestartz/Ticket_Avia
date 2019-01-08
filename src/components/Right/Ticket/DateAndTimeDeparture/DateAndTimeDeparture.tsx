import * as React from 'react'


require('./DateAndTimeDeparture.scss')


const DateAndTimeDeparture = (props) =>{

    let data = props.departure_date.split('.')
    

    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
      };

    let date = new Date(data);
      

    return(
        <div >
            <div className="DateAndTimeDeparture1"> {props.departure_time} </div>
            <div className="DateAndTimeDeparture2"> {props.origin}, {props.origin_name}</div>
            <div className="DateAndTimeDeparture3"> {date.toLocaleString("ru", options)} </div>         
        </div>      
    )
}

export default DateAndTimeDeparture


