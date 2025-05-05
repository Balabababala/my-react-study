import { useState } from 'react'


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

  return (
    <div>
      <input type='text' value={name} onChange={handleName} placeholder='商品名稱'/>
      <input type='text' value={price} onChange={handlePrice} placeholder='商品價格'/>
      <button onClick={productGoGO}>新增商品</button>
      <h1>狗物車內容</h1>
    <ol>
      {products.map((product)=>(

                  <li> name:{product.name} price: {product.price} </li>))}
    </ol>
      Sum:{productSum(products)} 
    </div>
  )
}

export default App
