import * as React from 'react'

import Box from './CheckBox/Box'
// import Text from './CheckBox/Text/Text'
require('./CountTransplants.scss')



const arr:string[] = ["Все","Без пересадок","1 пересадка","2 пересадки","3 пересадки"]


    

class CountTransplants extends React.Component<{callback,actives}>{
    constructor(props){
        super(props)
        
        // this.Layer6 = this.Layer6.bind(this);
       
    }

    // Layer6 = (isOpenYeah) => {
    //     this.props.Layer5(isOpenYeah);    

        
    // }
   
    
    render(){
        let boxes = arr.map(function(v,i){
            return(
                <div className={"lineCheckBox " +  i} key = {i} onClick={()=> this.props.callback(i)}>
                    <Box text={v} active={this.props.actives[i]}/>
                    {/* <Text txt = {v}/> */}
                </div>
            )
        }.bind(this)
    )
        return(
            <div className="CountTransplants">

            <div className="с1">КОЛИЧЕСТВО ПЕРЕСАДОК</div>  
            
        
                   <div className="list">

                        {boxes}

                    </div>
                
            </div>      
        )
    }
}

export default CountTransplants

