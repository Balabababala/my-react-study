//TodoList 練習
import'./App.css'
import { useState } from "react";

function App() {

const [hiValue,setHiValue]=useState("");
const [todoList,setTodoList]=useState(['吃早餐','做體操','寫程式'])
const [check, setCheck] = useState(Array(todoList.length).fill(false));

const handleChange=(e)=>{
    setHiValue(e.target.value);
}
const ohhoClick = () => {
    if (hiValue === '') return;
    setTodoList([...todoList, hiValue]);
    setCheck([...check, false]);       // ✅ 新增一個對應的 checkbox 狀態
    setHiValue('');                    // ✅ 清空輸入欄位
  };
const handleCheckboxChange = (index) => {
    const newCheck = [...check];
    newCheck[index] = !newCheck[index];
    setCheck(newCheck);
};
const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        ohhoClick();
    }
}

    return (<>
        <h1>My TodoList</h1>
        <div>
            <input id="hi" value={hiValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
            <button id="ohho" onClick={ohhoClick}>加入</button>    
        </div>          
        <ol>
            {todoList.map((todo, index) => (
          <li
            key={index}
            className={check[index] ? 'done' : ''}
          >
            <input
              type="checkbox"
              checked={check[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <span>{todo}</span>
          </li>
        ))}
        </ol>

    </>);

}

export default App;