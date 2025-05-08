import { useState } from 'react'
import AddButton from './component/AddButton';
import ProductList from './component/productList';

function App() {
  const[name,setName]=useState('');
  const[price,setPrice]=useState('');
  const[products,setProducts]=useState([{id:1,name:'牙刷',price:30}]);
  const handleName =(e)=>{
    setName(e.target.value)
  };
  const handlePrice =(e)=>{
    setPrice(e.target.value)
  };

  const productGoGO =()=>{
    if (price==='' ||name=== '')return; 
    setProducts([...products,{id:products.length+1,name:name,price:price}]);
    setName('')
    setPrice('')
  }
  const productSum =(products)=>{
    return products.reduce((sum,product)=> sum+ Number(product.price),0)           
  }
  const productDelete=(deleteIndex)=>{
   setProducts(products.filter((product,index)=>index!==deleteIndex)) ;
  }
  const productFix = (fixIndex, name, price) => {
    setProducts(products.map((product, index) => {
      if (index === fixIndex) {
        return {
          ...product,
          name,
          price: Number(price)
        };
      }
      return product;
    }));
  };

  return (
    <div>
      <AddButton price={price} name={name} handleName={handleName} handlePrice={handlePrice} productGoGO={productGoGO}/>
      <h1>狗物車內容</h1>
    <ul>
      
      <ProductList products={products} productDelete={productDelete} productFix={productFix}/>
    </ul>
      Sum:{productSum(products)} 
    </div>
  )
}

export default App
