function AddButton({price,name,handlePrice,handleName,productGoGO}){


    return(
        <>
            
            <input type='text' value={name} onChange={handleName} placeholder='商品名稱'/><br/>
            <input type='text' value={price} onChange={handlePrice} placeholder='商品價格'/><br/>
            <button onClick={productGoGO}>新增商品</button>
        </>
    )
}
export default AddButton