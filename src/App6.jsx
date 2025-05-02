

function App(){
    //陣列
    const items1 = ['Apple','Orange','Banana'];
    //利用 JSX 來渲染陣列
    //key 幫助 React 來識別元數唯一性
    const items2 = [
        <li key ='1'>Apple</li>,
        <li key ='2'>Orange</li>,
        <li key ='3'>Banana</li>
    ];
    // 使用Map 來渲染

    const items3 = items1.map((item,index) => (
        <li key ={index}>{item}-{index}</li>
    ))

    return(
        <>
            {items1}
            {items2}
            {items3}
        </>

    )
};
export default App;