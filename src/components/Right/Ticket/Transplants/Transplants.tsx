import * as React from 'react'


require('./Transplants.scss')


const Transplants = (props) =>{

    let stop:string;
    if(props.stops == 0 || props.stops >4 ){
        stop="ПЕРЕСАДОК"
    }else if(props.stops<5 && props.stops >1 ){
        stop="ПЕРЕСАДКИ" 
    }else if(props.stops == 1){
        stop="ПЕРЕСАДКА"
    }


    return(
            <div className="Transplants"> {props.stops} {stop}  </div>
                         
    )
}

export default Transplants