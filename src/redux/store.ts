import {configureStore, combineReducers} from "@reduxjs/toolkit";
import todoReducer from './toDoSlice.ts';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,

} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducers = combineReducers({
    todos: todoReducer,
});


const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

});
const persister = persistStore(store);
export default store;
export {persister};
export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;