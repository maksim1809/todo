import React from 'react';
import Todo from "../todo"

const TodoList = ({todos,setTodos,filteredTodos,searchInputText}) => {
    return (
            <ul className='list-group mb-3'>
                {filteredTodos.filter((todo) => todo.todoName.includes(searchInputText)).map((todoItem, idx) =>
                    <Todo key={todoItem.id}
                          idx={idx} name={todoItem.todoName}
                          todos={todos}  setTodos={setTodos}
                          todoItem={todoItem}/>)}
            </ul>
    );
};

export default TodoList;