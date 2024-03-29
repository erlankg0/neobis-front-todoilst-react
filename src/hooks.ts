import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import type {RootState, AddDispatch} from "./redux/store.ts";


export const useAddDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
