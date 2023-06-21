
import './App.css';
import React from 'react';
import Cart from './cart'
import './index.css';
import Navbar from './Navbar';
import app from './index'
import { initializeApp }  from 'firebase/app';
import { getFirestore, collection, addDoc,doc,deleteDoc, updateDoc, onSnapshot } from 'firebase/firestore';
class  App extends React.Component {
  constructor(){
    super();
    
    this.state = {
    products:[ ],
    loading:true
}

}
//add product
  addProduct = async () => {
    console.log('reched')
    try {
      const db = getFirestore(app);
      const productCollectionRef = collection(db, 'product');

      const newProductData = {
       image:'',
       title:"washingMachine",
       price:1888,
       qty:1
      };

      const docRef = await addDoc(productCollectionRef, newProductData);
      console.log('New product added with ID:', docRef.id);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };





componentDidMount() {
  const dbRef = getFirestore();
  const productCollectionRef = collection(dbRef, 'product');
   
  onSnapshot(productCollectionRef, (querySnapshot) => {
    const products = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data['id'] = doc.id;
      console.log(data);
      products.push(data);
    });
    this.setState({
      products: products,
      loading: false
    });
  }, (error) => {
    console.log('Error getting documents:', error);
  });
}
handleIncreaseQty = async (product) => {
  const { products } = this.state;
  const index = products.indexOf(product);

  const db = getFirestore();

  const docRef = doc(db, 'product', products[index].id);

  try {
    await updateDoc(docRef, {
      qty: products[index].qty + 1,
    });
    console.log('Product quantity updated successfully.');
  } catch (error) {
    console.error('Error updating product quantity:', error);
  }
};

//dec
handleDec = async (product) =>{
const {products} = this.state;
const index = products.indexOf(product);
if(products[index].qty === 0){
return;
}
const db = getFirestore();
const docRef = doc(db,'product',products[index].id);
try {
  await updateDoc(docRef,{
    qty: products[index].qty - 1,
  })
  console.log('Product quantity updated successfully.');;
} catch (error) {
  console.error('error updating product quantity',error);
}
}
  
delteCart = async (id) => {
  const {products} = this.state;
  const db = getFirestore();
const docRef = doc(db,'product',id);
try {
   await deleteDoc(docRef);
  console.log('Product deleted successfully.');;
} catch (error) {
  console.error('error updating',error);
}
 
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
      const {products,loading} = this.state;
    
  return (
    <>
  <Navbar cartCount={this.getCartCount()}/>
  <button onClick={this.addProduct}>Add product</button>
 <Cart   products={products} key={products.id} increaseQty={this.handleIncreaseQty} deletecart={this.delteCart} decreaseQty={this.handleDec}/>
  {loading && <h1>Loading products ...</h1>}
<h1>Total:{this.getTotalAmount()} </h1>
 </>
  );
    }
}

export default App;
