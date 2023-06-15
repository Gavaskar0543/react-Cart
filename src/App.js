
import './App.css';
import React from 'react';
import Cart from './cart'
import './index.css';
import Navbar from './Navbar';

class  App extends React.Component {
  constructor(){
    super();
    
    this.state = {
    products:[
        {
        title:'phone',
        price:999,
        qty:0,
        img:'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        id:1
        },
        {
            title:'watch',
        price:99,
        qty:0,
        img:'https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=452&q=80',
        id:2
        }
        ,{
            title:'laptop',
        price:9999,
        qty:0,
        img:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80',
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
getCartCount =()=>{
  let count = 0; 
const {products} = this.state;
products.forEach(element => {
  count += element.qty;
});
return count;
}
getTotalAmount = () =>{  
  let count = 0;
  const {products} = this.state;
  products.map((product) => {
    count = count+product.qty * product.price;

  });
  return count;
}
    render(){
      const {products} = this.state;
    
  return (
    <>
  <Navbar cartCount={this.getCartCount()}/>
 <Cart   products={products} key={products.id} increaseQty={this.handleIncreaseQty} deletecart={this.delteCart} decreaseQty={this.handleDec}/>
<h1>Total:{this.getTotalAmount()} </h1>
 </>
  );
    }
}

export default App;
