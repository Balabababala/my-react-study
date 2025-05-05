//事件處理

function App(){
    const handleClick2=function(){
        alert('ok2');
    };
    const handleClick3 = (e) =>{
        alert('ok3' +e);
        console.log(e);
    };

    return(
        <>
            <button onClick={function(){alert('ok')}}>按鈕</button>
            <button onClick={handleClick2}>按鈕2</button>
            <button onClick={handleClick3}>按鈕3</button>
        </>
    )
};
export default App;