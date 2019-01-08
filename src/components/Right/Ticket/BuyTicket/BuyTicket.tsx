import * as React from 'react'

require('./BuyTicket.scss')


    let t = "₽"
    let c 
    let cd = "€"

interface price{
    price:number
}

class BuyTicket extends React.Component<{flo,price}>{
    constructor(props){
        super(props)
        // console.log(this.props.flo)
    }

    

    render(){
        
        if(this.props.flo==1){
            t = "₽"
            c = this.props.price
            console.log('rub')

        }

        if(this.props.flo==2){
            t = "$"
            c = Math.round(this.props.price/62)
        }

        if(this.props.flo==3){
            t = "€"
            c = Math.round(this.props.price/73)
        }



        return(
                <div className="BuyTicket">    
                        
                    <div className="block1">
                        <img src="http://www.cankayagundem.com/images/haberler/2016/03/thy_tarihinde_bir_ilk_h40069_3fd3f.jpg" 
                                        className="pic" />
                        <button className="btn"> 
                            
                            <div className="SizeText">
                                Купить за <br/> {c} {" "} {t} 
                            </div>
                            
                        </button>

                    </div>
                </div>
    
        )
    }
}

export default BuyTicket
