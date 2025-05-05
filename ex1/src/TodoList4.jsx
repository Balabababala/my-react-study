import './App.css'
import { useState } from "react";

function App() {
  const [hiValue, setHiValue] = useState("");

  const handleChange = (e) => {
    setHiValue(e.target.value);
  };

  const [todoList, setTodoList] = useState([
    { id: 1, text: '吃早餐', completed: true },
    { id: 2, text: '做體操', completed: false },
    { id: 3, text: '寫程式', completed: true },
  ]);

  const ohhoClick = () => {
    if (hiValue === '') return;
    const newId = todoList.length > 0 ? Math.max(...todoList.map((t) => t.id)) + 1 : 1;
    const newTodo = { id: newId, text: hiValue, completed: false };
    setTodoList([...todoList, newTodo]);
    setHiValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      ohhoClick();
    }
  };

  // ✅ 正確更新 completed 狀態
  const toggleCompletion = (id) => {
    setTodoList(todoList.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  const handleTodoDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>My TodoList</h1>
      <div>
        <input id="hi" value={hiValue} onChange={handleChange} onKeyDown={handleKeyDown} />
        <button id="ohho" onClick={ohhoClick}>加入</button>
      </div>
      <ol>
        {todoList.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleTodoDelete(todo.id)}>X</button>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
