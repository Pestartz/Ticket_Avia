import * as React from 'react'
import CountTransplants from './CountTransplants/CountTransplants'
import Right from '../../Right/Right';
require('./ChangeCurrency.scss')




class ChangeCurrency extends React.Component<{btnState1,btnState2,btnState3,callback,actives,btnChange}>{
    constructor(props){
        super(props)

        
    }

    
    
   
    



    render(){

        return(
            <div className="ChangeCurrency">
            
                
                <div className="block11">ВАЛЮТА</div>

                <div className="part1">
                    <button className='rub' onClick={()=> this.props.btnChange(1)}> RUB </button>
                    <button className="usd" onClick={()=> this.props.btnChange(2)}> USD </button> 
                    <button className="eur" onClick={()=> this.props.btnChange(3)}> EUR </button>
                </div>

                
                <div className="part2">
                    <CountTransplants actives={this.props.actives} callback = {this.props.callback}/>
                </div>

               
                  
        </div>   
        )
    }
}


export default ChangeCurrency