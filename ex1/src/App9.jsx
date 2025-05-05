/*
商品資料如下:
        { id: 1, name: '蘋果', price: 40, category: '水果' ,qty:5},
        { id: 2, name: '洗髮精', price: 120, category: '日用品',qty:10 },
        { id: 3, name: '香蕉', price: 55, category: '水果' ,qty:15},
        { id: 4, name: '牙膏', price: 45, category: '日用品' ,qty:20}
*/
//子組件 頭
function ProductTableHeader(){
    return(
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
    )
}
//子組件 身
function ProductTableBody({products}){
    return(
        <tbody>
            {products.map((item) => (
                <tr key={item.id}>
                    <td style={{ width: '12%' }}>{item.id}</td>
                    <td style={{ width: '15%' }}>{item.name}</td>
                    <td style={{ width: '15%' }}>{item.category}</td>
                    <td style={{ width: '12%' }} align="right">{item.price}</td>
                    <td style={{ width: '12%' }} align="right">{item.qty}</td>
                    <td style={{ width: '15%' }} align="right">{item.qty * item.price}</td>
                </tr>
      ))}
    </tbody>
    )
}
//子組件 尾
function ProductTableFooter({totalPrice}){
    return(
        <tfoot>
            <tr>
                <td colSpan="5" align="right">大計</td>
                <td align="right">{totalPrice}</td>
            </tr>
        </tfoot>

    )
}
//子組件 融合
function ProductTable({products,totalPrice}){
    return(
        <table style={{ border: '20px solid pink', borderCollapse: 'collapse', width: '130%' }} >
            <ProductTableHeader/>
            <ProductTableBody products={products}/>
            <ProductTableFooter totalPrice={totalPrice}/>
        </table>
    )
    
}

//父組件
function App(){
    const products=[
        { id: 1, name: '蘋果', price: 40, category: '水果' ,qty:5},
        { id: 2, name: '洗髮精', price: 120, category: '日用品',qty:10 },
        { id: 3, name: '香蕉', price: 55, category: '水果' ,qty:15},
        { id: 4, name: '牙膏', price: 45, category: '日用品' ,qty:20}
    ]
    const totalPrice = products.reduce( (sum,product)=>  sum+product.price*product.qty,0 )

    return(
        <>
            <ProductTable products={products} totalPrice={totalPrice}/>
        </>
    )
}

export default App;