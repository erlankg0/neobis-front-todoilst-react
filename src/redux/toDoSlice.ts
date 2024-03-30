import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Category = 'Person' | 'Business';

type ToDo = {
    id: string;
    title: string;
    isDone: boolean;
    category: Category;
};

type TodoState = {
    list: ToDo[];
};

const initialState: TodoState = {
    list: [],
};

const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<{ title: string; category: Category }>) {
            const newTodo = {
                id: new Date().toString(),
                title: action.payload.title,
                category: action.payload.category,
                isDone: false
            }
            state.list = [...state.list, newTodo];
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        toggleToDoIsDone(state, action: PayloadAction<string>) {
            const toggleTodo = state.list.find(todo => todo.id === action.payload);
            if (toggleTodo) {
                toggleTodo.isDone = !toggleTodo.isDone;
            }
        },
        updateTextTodoItem: (state, action: PayloadAction<{ id: string, text: string }>) => {
            const { id, text } = action.payload;
            const todoIndex = state.list.findIndex(todo => todo.id === id);
            if (todoIndex !== -1) {
                state.list[todoIndex].title = text;
            }
        }

    },
});

export const {addTodo, toggleToDoIsDone, removeTodo, updateTextTodoItem} = toDoSlice.actions;

export default toDoSlice.reducer;
export type {Category};