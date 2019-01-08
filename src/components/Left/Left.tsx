import * as React from 'react'
import ChangeCurrency from './ChangeCurrency/ChangeCurrency'

require('./Left.scss')





class LeftComponent extends React.Component<{btnState1,btnState2,btnState3,btnChange,callback,actives}>{
    constructor(props){
        super(props)

        
    }

    


    render(){
        return(
            <div className="left">
                <ChangeCurrency 
                    btnState1={this.props.btnState1}
                    btnState2={this.props.btnState2}
                    btnState3={this.props.btnState3}

                    actives={this.props.actives} 
                    callback={this.props.callback} 
                    btnChange={this.props.btnChange}/>

            </div>      
        )
    }
}

export default LeftComponent