/* Cart4 拆分模組練習
src/
├── components/
│   ├── ProductSelector.jsx    商品下拉
│   ├── CartList.jsx           購物清單List
│   └── TotalAmount.jsx        顯示金額
├── Cart4.jsx
├── App.css
*/

import './App.css';
import React, { useState, useEffect } from 'react';
import ProductSelector from './component/ProductSelector';
import CartList from './component/CartList';

function Cart() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        if (data.length > 0) {
          setName(data[0].name);
          setPrice(data[0].price);
        }
      })
      .catch((err) => {
        console.log('載入失敗', err);
      });
  }, []);

  const handleAdd = () => {
    const newItem = { name, price: Number(price) };
    setItems([...items, newItem]);
    setName('');
    setPrice('');
  };

  const handleDelete = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const handleSelectChange = (e) => {
    const selectedName = e.target.value;
    const selectedProduct = products.find((p) => p.name === selectedName);
    if (selectedProduct) {
      setName(selectedProduct.name);
      setPrice(selectedProduct.price);
    }
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () =>{
    if(items.length === 0){
      alert('你要幹嘛')
      return;
    }
    fetch("http://localhost:3000/orders",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        items,
        total,
        createdAt: new Date().toLocaleDateString()+ " "+new Date().toLocaleTimeString()
      })
    }).then(res=>res.json())
    .then(data=>{
      alert("算完帳了");
      setItems([]);
    })
    .catch(err=>{
      console.log("算帳失敗",err);
      alert("算帳失敗");
    })
    ;

  }
  return (
    <div>
      <h2>簡易購物車</h2>
      <ProductSelector products={products} handleSelectChange={handleSelectChange}/>
      <br />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="商品名稱"
      />
      <br />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="價格"
      />
      <p />
      <button onClick={handleAdd}>新增</button>

      <h3>購物車內容:</h3>
      <CartList items={items} handleDelete={handleDelete}/>
      <TotalAmount total={total}/>
      <button onClick={handleCheckout}>算帳</button>
    </div>
  );
}

export default Cart;
