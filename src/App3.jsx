//子組件
function Hello(){
    return(
        <h1>hello</h1>
    )
}
//子組件
function World(){
    return(
        <h1>world</h1>
    )
}

//父組件
function App(){
    return(
        <>
            <Hello/>
            <World/>
        </>
    )
}
export default App