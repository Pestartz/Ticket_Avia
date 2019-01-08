import * as React from 'react'
import LeftComponent from './Left/Left'
import Right from './Right/Right'
import { format } from 'util';

require('./App.scss')

interface AppState{
    arr:boolean[]
    // kFilter:number
    btn1:boolean
    btn2:boolean
    btn3:boolean
}

let kFilter = 0;
let flo = 1


class App extends React.Component<{},AppState>{
    constructor(props){
        super(props)


        this.state = {

            btn1:false,
            btn2:false,
            btn3:false,

            arr: [true,false,false,false,false]
        }
        

        this.handleChange = this.handleChange.bind(this);
         
        this.btnChange = this.btnChange.bind(this);

        
    }


    btnChange = (i) =>{

        flo=i
    }

    handleChange = (i) => {

        let arr = this.state.arr
        
        kFilter=i

        arr[i]=!arr[i]

        this.setState({             
            arr
        }); 
    }

    

    render(){
        //  console.log(flo)
        return(
            <div className="MainForm">
           
                
                <LeftComponent 
                    actives={this.state.arr} 
                    callback={this.handleChange} 
                    btnState1={this.state.btn1} 
                    btnState2={this.state.btn2}
                    btnState3={this.state.btn3}
                    btnChange={this.btnChange}/>

                <Right  
                    stateFrom={this.state.arr}
                    flo={flo}
                    />
            </div>
        )
    }
}



export default App