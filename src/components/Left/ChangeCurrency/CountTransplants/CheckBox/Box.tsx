import * as React from 'react'
// import Text from './CheckBox/Box/Text/Text'
require('./Box.scss')




class Box extends React.Component<{text,active}>{
    constructor(props){
        super(props)
        // console.log(this.props)
    
        // this.Layer8 = this.Layer8.bind(this);
       
    }

    
    
    
    

    


    
    render(){
        const check = <svg 
                        version="1.1" 
                        viewBox="0 0 26 26"
                        width="10px" 
                        height="10px">
                        <path d="m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z" fill="#0698fa"/>
                      </svg>

        // console.log(this.state)
        // console.log(this.props)
        return(
            <div className="SpaceBox">
                <div className={(this.props.active)? "BoxCheck":"NonCheck" }  >
                
                
                    {(this.props.active) ?check:""}

                    

                </div>

                <label className="text">
                        {this.props.text}
                </label>
            </div>      
        )
    }
}

export default Box