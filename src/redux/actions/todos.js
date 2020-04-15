export const ADD_TODO = 'ADD_TODO';
export const MODIFY_TODO = 'MODIFY_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    };
}