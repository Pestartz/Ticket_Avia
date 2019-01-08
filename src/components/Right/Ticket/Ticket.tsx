import * as React from 'react'
import DateAndTimeDeparture from './DateAndTimeDeparture/DateAndTimeDeparture'
import Transplants from './Transplants/Transplants'
import DateAndTimeArrival from './DateAndTimeArrival/DateAndTimeArrival'
import BuyTicket from './BuyTicket/BuyTicket'

require('./Ticket.scss')

interface ticket{
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}




class Ticket extends React.Component<{flo,ticket}> {
    constructor(props){
        super(props)
        // console.log(this.props.flo)
    }
    
    // 
    
    render(){
        return(
            <div className="ticket">    
                    
                 <div className="block1">
                     <BuyTicket 
                        price={this.props.ticket.price} 
                        flo={this.props.flo} />
                 </div>
                    
                 <div className="block2">
                     <DateAndTimeDeparture 
                        departure_time={this.props.ticket.departure_time} 
                        origin={this.props.ticket.origin}
                        origin_name={this.props.ticket.origin_name} 
                        departure_date={this.props.ticket.departure_date}/>
                        
                        
                </div>

                <div className="block3">
                    <Transplants stops={this.props.ticket.stops} />
                    <img src="https://medcloud.ucsd.edu/processes/Documents/line.png" className="pic2"/>
                </div>

                <div className="block4">
                    <DateAndTimeArrival 
                        arrival_time={this.props.ticket.arrival_time} 
                        destination={this.props.ticket.destination}
                        destination_name={this.props.ticket.destination_name} 
                        arrival_date={this.props.ticket.arrival_date} /> 
                </div>        
                    
                    
            </div>

        )
    }
}

export default Ticket


