import AppState from "../state";

const todoReducer = (state = AppState, action) => {
    switch(action.type) {
        case 'ADDTODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.payload),
                    ...state.todos.slice(action.payload + 1)
                ]
            }
            
        case 'JUST_TEST':
            return {
                ...state,
                name: 'Daniel',
            }

        case 'ALLOW_LOGIN':
            return {
                ...state,
                loggedIn: !state.loggedIn,
            };
            
    }
    return state
}

export default todoReducer;

