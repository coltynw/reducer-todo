import React from 'react';

const Todo = props => {
  const { id, toggleComplete, todo, completed } = props;
  return (
    // <li
    // //   style={{ textDecoration: completed ? 'line-through' : 'none' }}
    //   style={props.todo.completed ? { textDecoration: 'line-through' } : null}
    //   onClick={() => toggleComplete(id)}
    // >
    //   {todo}
    // </li>
    
    <div
      style={completed ? { textDecoration: 'line-through' } : null}
      onClick={() => toggleComplete(id)}
    >
      {todo}
    </div>
    
        // <div onClick={toggleComplete}
        
        // style={{ textDecoration: todo.completed ? "line-through" : ""}
        
        
        // </div>
    
  );
};

export default Todo; 


// import React from 'react';





// const Todo = props => {
//     // onClick on the updated div pushing to State (I think)

//   return (
//     <div
//       style={props.todo.completed ? { textDecoration: 'line-through' } : null}
//       onClick={() => props.handleToggleComplete(props.todo.id)}
//     >
//       {props.todo.task}
//     </div>
//   );
// };

// export default Todo;