import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [pub, setPub] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handlePubChange = (e) => {
    setPub(e.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:8080/book')
      .then(res => res.json())
      .then(data => {
        setBooks(data.data);
      })
      .catch(err => {
        console.log("載入失敗", err);
      });
  }, []);

  const displayBooks = (books) =>
    books.map((book) => (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.price}</td>
        <td>{book.amount}</td>
        <td>{book.pub === true ? "是" : "否"}</td>
        <td>
          <button>編輯</button>
          <button>刪除</button>
        </td>
      </tr>
    ));

  const handleAdd = (e) => {
    e.preventDefault();

    // 使用 POST 請求來新增書籍
    fetch("http://localhost:8080/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        price,
        amount,
        pub
      })
    })
      .then(res => res.json())
      .then(data => {
        alert("新增成功");

        // 清空表單欄位
        setName("");
        setPrice("");
        setAmount("");
        setPub("");
      })
      .catch(err => {
        console.log("新增失敗:", err);
        alert("新增失敗");
      });
  };

  return (
    <div>
      <h2>樞機管理系統(fetch)</h2>
      <form>
        id <input name="id" type="text" readOnly /><p />
        名字 <input name="name" type="text" required value={name} onChange={handleNameChange} /><p />
        價格 <input name="price" type="text" required value={price} onChange={handlePriceChange} /><p />
        數量 <input name="amount" type="text" required value={amount} onChange={handleAmountChange} /><p />
        出刊? <input name="pub" type="text" required value={pub} onChange={handlePubChange} /><p />
        <button onClick={handleAdd}>新增</button>
      </form>
      <h2>書樞機列表</h2>
      <table className="table-border">
        <thead>
          <tr>
            <th>ID</th>
            <th>書名</th>
            <th>價格</th>
            <th>數量</th>
            <th>出刊</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {displayBooks(books)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
