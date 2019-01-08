import * as React from 'react'
import Ticket from "./Ticket/Ticket"
import data from './Ticket/InfoForTicket'
import { render } from '../../../node_modules/@types/react-dom';
require('./Right.scss')



let kState
let t

let Ks = [true,false,false,false,false]

class Right extends React.Component<{flo,stateFrom}>{
    constructor(props){
        super(props)

        console.log(this.props.flo)
        
    }

    withoutReplace(data){
        if(!data.stops){return true}
        return false
    }
  
    one(data){
        if(data.stops == 1){return true}
        return false
    }
  
    two(data){
        if(data.stops== 2){return true}
        return false
    }
  
    three(data){
        if(data.stops == 3){return true}
        return false
    }
  
    manager(data, stateFrom){
      let final = false
      for(let a=0;a<5;a++){
        if (!stateFrom[a]) {continue}
        switch(a){
          case 0:
            if(this.one(data) || this.two(data) || this.three(data) || this.withoutReplace(data)){
              final = true;
            }
            break;
          case 1:
            if(this.withoutReplace(data))  {final = true;}
            break;
          case 2:
            if(this.one(data))  {final = true;}
            break;
          case 3:
            if(this.two(data))  {final = true;}
            break;
          case 4:
            if(this.three(data))  {final = true;}
            break;
        }
      }
      return final
    }

    
   

    render(){

        
        
        kState = this.props.stateFrom
        
        
        
    
        let tickets = []



      
        


        data.map((v,i) => {
            if(this.manager(v, (kState) )){
                tickets.push
                (<Ticket 
                    ticket={v} 
                    key={i} 
                    
                    flo={this.props.flo} />)
            }
        });
      
        // console.log(tickets)
        

        

        // let tickets:any = data.map((item,i) => 
        //     <Ticket  ticket={item} key={i} />
        // );

        return(
            <div className="right">
                {tickets}
                
            </div>      
        )
    }
}




export default Right


