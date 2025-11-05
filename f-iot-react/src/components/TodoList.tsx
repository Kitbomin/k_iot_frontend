import type { Todo } from '@/practice/c_hooks/TodoAppLocalStorage'
import React from 'react'
import TodoItem from './TodoItem';

//! 목록 반복(TodoItem) 렌더링 컴포넌트

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({todos, toggleTodo, deleteTodo}: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}

            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList