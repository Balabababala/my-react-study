//usestate 與事件處裡 +展開運算子
import { useState } from "react";

function App() {
    const [inputMessage,setInputMessage]=useState('');
    const [messages,setMessage]=useState([]);

    const handleInputChange= (e)=>{
        //e.target.value 是 input 欄位的內容
        setInputMessage(e.target.value);
        console.log(e.target.value);
    }

    const handleAddMessage= ()=>{
        //setMessage(messages.concat(inputMessage))
        setMessage([...messages,inputMessage]);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddMessage();
        }
    }

    return (<>
            <input type="text" value={inputMessage} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <button onClick={handleAddMessage} >Send</button><p />
            <ul>
                {
                    messages.map((message,index)=>(
                        <li key={index}> {index}:{message}</li>
                    ))
                }
            </ul>
    </>);

}

export default App;