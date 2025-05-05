import TodoItem from "./TodoItem"
function TodoList({ todos, toggleCompletion, handleTodoDelete }) {

    return(
        
        <ol>
        {todos.map((todo) =>
         (
            <TodoItem todo={todo} 
                      toggleCompletion={toggleCompletion} 
                      handleTodoDelete={handleTodoDelete} />
        ))}
       </ol>
       
    )
}
export default TodoList