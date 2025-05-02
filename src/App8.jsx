/*
商品資料如下:
{ id: 1, name: '蘋果', price: 40, category: '水果' },
{ id: 2, name: '洗髮精', price: 120, category: '日用品' },
{ id: 3, name: '香蕉', price: 55, category: '水果' },
{ id: 4, name: '牙膏', price: 45, category: '日用品' }
請利用 react 將上述商品資料透過 jsx + <table> 標籤呈現
*/


function App(){
    //物件陣列
    const products=[
        { id: 1, name: '蘋果', price: 40, category: '水果' ,qty:5},
        { id: 2, name: '洗髮精', price: 120, category: '日用品',qty:10 },
        { id: 3, name: '香蕉', price: 55, category: '水果' ,qty:15},
        { id: 4, name: '牙膏', price: 45, category: '日用品' ,qty:20}
    ]
    
   const trans= products.map((item,index)=>(
            <tr key={item.id}>
                <td style={{ width: '12%' }}>{item.id}</td>
                <td style={{ width: '15%' }}>{item.name}</td>
                <td style={{ width: '15%' }}>{item.category}</td>
                <td style={{ width: '12%' }} align="right">{item.price}</td>
                <td style={{ width: '12%' }} align="right">{item.qty}</td>
                <td style={{ width: '15%' }} align="right">{item.qty*item.price}</td>
            </tr>
    ))
    const totalPrice = products.reduce( (sum,product)=>  sum+product.price*product.qty,0 )

     return (
        <>
            <table style={{ border: '20px solid pink', borderCollapse: 'collapse', width: '130%' }} >
                <thead>
                    <tr>
                        <th style={{ width: '12%' }}>編號</th>
                        <th style={{ width: '15%' }}>名字</th>
                        <th style={{ width: '15%' }}>種類</th>
                        <th style={{ width: '12%' }} align="right">價格</th>
                        <th style={{ width: '12%' }} align="right">數量</th>
                        <th style={{ width: '15%' }} align="right">小計</th>
                    </tr>
                </thead>
                <tbody>
                    {trans}
                    
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5" align="right">大計</td>
                        <td align="right">{totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
        </>
      );
}

export default App;