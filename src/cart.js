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
    render(){
        const {products} = this.state;
        return (
<div>
{        products.map((products) =>{
    return <CartItem products={products} key={products.id} />
})}
</div>
        );
    }
}
export default  Cart;