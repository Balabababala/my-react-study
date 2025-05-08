import './App.css';
import React, { useState, useEffect } from 'react';

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
      <select onChange={handleSelectChange}>
        {products.map((p, i) => (
          <option key={i} value={p.name}>
            {p.name} ${p.price}
          </option>
        ))}
      </select>
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
      <ul>
        {items.length === 0 ? (
          <li>無商品</li>
        ) : (
          items.map((item, index) => (
            <li key={index}>
              {index + 1}. {item.name} - ${item.price}
              <button onClick={() => handleDelete(index)}>X</button>
            </li>
          ))
        )}
      </ul>

      <h3>總金額: {total}</h3>
      <button onClick={handleCheckout}>算帳</button>
    </div>
  );
}

export default Cart;
