//React 組件參數傳遞
//子組件
function CircleArea({r}){
    const pi = 3.1415926;
    const area =r*r*pi;
    return (<div>{area}</div>)
}

const CircleArea2 = ({r})=>{
    const pi = 3.1415926;
    const area =r*r*pi;
    return (<div>{area}</div>)
}

const Fruit= (props)=>{
    return(<div>水果名稱:{props.fruitName} 水果價格{props.fruitPrice}</div>)
}

const Fruit2= ({fruitName,fruitPrice})=>{
    return(<div>水果名稱:{fruitName} 水果價格{fruitPrice}</div>)
}

const Fruit3= (props)=>{
    props.printLog();
    return(<div>水果名稱:{props.fruitName} 水果價格{props.fruitPrice}</div>)
}

//父組件
function App(){
    return(
        <>
            <CircleArea r="10" />
            <CircleArea2 r="10" />
            <Fruit fruitName="Apple" fruitPrice="50"/>
            <Fruit2 fruitName="Banana" fruitPrice="30"/>
            <Fruit3 fruitName="Orange" fruitPrice="40" printLog={()=>{console.log("你是柳丁嗎")}}/>
        </>
    )
}
export default App 