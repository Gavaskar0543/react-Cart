import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'phone',
            price:999,
            qty:1,
            img:''

        }
    }
    increaseQty = () =>{
       this.setState({
      qty :  this.state.qty + 1
       },()=>{
        console.log(this.state)
       });
    }
    decreaseQty = () =>{
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState({
            qty: this.state.qty - 1
        },()=>{
            console.log(this.state);
        })
        //setstate form 2
    //   this.state((prevState)=>({
    //     return{
    //         qty : prevState.qty -1
    //     }
    //   }),() => {})
    }
    render(){
        const {price,qty} = this.state;
        return (
           <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{this.state.title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty:{qty}</div>
                </div>
                <div className='cart-item-actions'>
                    {/* buttons */}
                    <img alt="plus-icon" className='action-icons'onClick={this.increaseQty} src='https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg' />
                    <img alt="minus" className='action-icons' onClick={this.decreaseQty} src='https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' />
                    <img alt="delete" className='action-icons' src='https://as2.ftcdn.net/v2/jpg/00/98/26/11/1000_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg' />

                </div>
            </div>
            
        );
    }
}

//style objects
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;