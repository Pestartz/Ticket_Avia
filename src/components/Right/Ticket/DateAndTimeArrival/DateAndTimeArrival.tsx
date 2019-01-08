import * as React from 'react'


require('./DateAndTimeArrival.scss')




const DateAndTimeArrival = (props) =>{

    let data = props.arrival_date.split('.')
    

    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
      };

    let date = new Date(data);

    
    return(
        <div >
            <div className="DateAndTimeArrival1"> {props.arrival_time}  </div>
            <div className="DateAndTimeArrival2"> {props.destination}, {props.destination_name}</div>
            <div className="DateAndTimeArrival3"> {date.toLocaleString("ru", options)} </div>         
        </div>      
    )
}

export default DateAndTimeArrival


