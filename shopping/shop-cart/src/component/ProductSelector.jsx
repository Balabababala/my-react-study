function ProductSelector({products,handleSelectChange}){
    return(<>
        <select onChange={handleSelectChange}>
        {products.map((p, i) => (
          <option key={i} value={p.name}>
            {p.name} ${p.price}
          </option>
        ))}
      </select>
    
    
    </>)
}
export default ProductSelector