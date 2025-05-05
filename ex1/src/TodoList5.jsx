/* TodoList 拆分模組練習
src/
├── components/
│   ├── TodoInput.jsx
│   ├── TodoItem.jsx
│   └── TodoList.jsx
├── TodoList5.jsx
├── App.css
*/

import './App.css'
import { useState } from "react";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [hiValue, setHiValue] = useState("");

  const handleChange = (e) => {
    setHiValue(e.target.value);
  };

  const [todos, setTodos] = useState([
    { id: 1, text: '吃早餐', completed: true },
    { id: 2, text: '做體操', completed: false },
    { id: 3, text: '寫程式', completed: true },
  ]);

  const ohhoClick = () => {
    if (hiValue === '') return;
    const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
    const newTodo = { id: newId, text: hiValue, completed: false };
    setTodos([...todos, newTodo]);
    setHiValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      ohhoClick();
    }
  };

  // ✅ 正確更新 completed 狀態
  const toggleCompletion = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>My TodoList</h1>
        <TodoInput hiValue={hiValue} handleChange={handleChange} ohhoClick={ohhoClick} handleKeyDown={handleKeyDown}/>
        <TodoList  todos={todos} toggleCompletion={toggleCompletion} handleTodoDelete={handleTodoDelete}/>
    </>
  );
}

export default App;
