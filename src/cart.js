import React from "react";
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
        products:[
            {
            title:'phone',
            price:999,
            qty:1,
            img:'',
            id:1
            },
            {
                title:'watch',
            price:999,
            qty:6,
            img:'',
            id:2
            }
            ,{
                title:'laptop',
            price:999,
            qty:8,
            img:'',
            id:3
            }
        ]
    }
 
    }
    handleIncreaseQty = (product) => {
//console.log('hello you call me to increase qty!',product);
const {products} = this.state;
const index = products.indexOf(product);
products[index].qty += 1;
this.setState({
    products
})
    }
handleDec = (product) =>{
const {products} = this.state;
const index = products.indexOf(product);
if(products[index].qty === 0){
    return;
}
products[index].qty -= 1;
this.setState({
    products
})
}
delteCart = (id) => {
    const {products} = this.state;
    const item = products.filter(Element =>{
        return Element.id !== id;
    })
    this.setState({
        products : item
    })
}
    render(){
        const {products} = this.state;
        return (
<div>
{        products.map((products) =>{
    return <CartItem products={products} key={products.id} increaseQty={this.handleIncreaseQty} deletecart={this.delteCart} decreaseQty={this.handleDec}/>
})}
</div>
        );
    }
}
export default  Cart;