import React from "react";
import CartItem from './CartItem';

const Cart = (props) => {
   
        const {products} = props;
        return (
<div>
{        products.map((products) =>{
    return <CartItem products={products} key={products.id} increaseQty={props.increaseQty} deletecart={props.deletecart} decreaseQty={props.decreaseQty}/>
})}
</div>
        );
    
}
export default  Cart;