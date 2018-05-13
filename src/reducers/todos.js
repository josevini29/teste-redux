export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Math.random(),
                text: action.text
            }]
        case 'REM_TODO':
            let newState = [];
            state.forEach((todo) => {
                if (todo.id !== action.idTodo) {
                    newState.push(todo);
                }
            })
            return newState;
        default:
            return state;
    }
}