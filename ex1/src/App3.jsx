//建立組件2種
//1.function
//2.()=>函數式

//子組件
function Hello(){
    return(
        <h1>hello</h1>
    )
};
//子組件
const World = () => {
    return (
        <h1>world</h1>
    )
};

//父組件
function App(){
    return(
        <>
            <Hello/>
            <World/>
        </>
    )
};
export default App;