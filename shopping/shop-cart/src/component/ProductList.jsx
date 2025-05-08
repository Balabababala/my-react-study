import { useState, useEffect } from 'react';

function ProductList({ products, productDelete, productFix }) {
  const [editProducts, setEditProducts] = useState([]);

  // 每當 products 更新時，同步到 editProducts
  useEffect(() => {
    setEditProducts(products.map(p => ({ name: p.name, price: p.price })));
  }, [products]);

  // 處理輸入變更（動態欄位）
  const handleEditChange = (index, field, value) => {
    const updated = [...editProducts];
    updated[index][field] = value;
    setEditProducts(updated);
  };

  return (
    <ul>
      {products.length === 0 ? (
        <li>無內容</li>
      ) : (
        products.map((product, index) => (
          <li key={product.id}>
            id: {product.id}&nbsp;&nbsp;
            name:
            <input
              type="text"
              value={editProducts[index]?.name || ''}
              onChange={(e) => handleEditChange(index, 'name', e.target.value)}
            />
            &nbsp;&nbsp;
            price:
            <input
              type="text"
              value={editProducts[index]?.price || ''}
              onChange={(e) => handleEditChange(index, 'price', e.target.value)}
            />
            &nbsp;&nbsp;
            <button onClick={() => productDelete(index)}>x</button>
            <button onClick={() =>
              productFix(index, editProducts[index].name, editProducts[index].price)
            }>
              修正
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default ProductList;
