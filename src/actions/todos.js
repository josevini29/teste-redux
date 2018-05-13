export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text,
    }
}

export function remTodo(idTodo) {
    return {
        type: 'REM_TODO',
        idTodo,
    }
}