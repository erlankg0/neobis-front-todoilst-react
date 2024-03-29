import {configureStore} from "@reduxjs/toolkit";
import todoReducer from './toDoSlice.ts';
const store = configureStore({
    reducer: todoReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;