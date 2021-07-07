import React from 'react';

const Todo = props => {

  const { id, toggleComplete, todo, completed } = props;
  console.log(props)

  return (
    <div
    className={`todo${todo.completed ? "completed" : ""}`}
      style={completed ? { textDecoration: 'line-through' } : null}
      onClick={() => toggleComplete(id)}

    >
      {todo}
    </div>
  );
};

export default Todo; 


