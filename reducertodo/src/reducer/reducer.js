
export const initialState = {
    todos: [
        {
            todo: 'Learn about reducers',
            completed: false,
            id: Math.random()
          }
    ]
}
  export const todoReducer = (state =[], action) => {
      switch (action.type) {
         case "ADD_TODO":
             return { ...state, 
                todos: [
                    ...state.todos,
                    {
                        id: Math.random(),
                        todo: action.text,
                        completed: false
                      }
                ]
             };

        case "TOGGLE_COMPLETE":
            console.log(action.payload)
            return { ...state, 
                todos: state.todos.map( todo => 
                    todo.id === action.payload ? {
                        ...todo,
                        completed: !todo.completed
                    } : todo)
            };

            case 'CLEAR_COMPLETED' : 
                return {
                    ...state,
                    todos: state.todos.filter(todo => !todo.completed)
                };

        default:
            return state;
      }
  }; 