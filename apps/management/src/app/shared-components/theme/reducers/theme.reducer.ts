import { createReducer,on } from "@ngrx/store";
import { modeDarkActive } from "../actions/actions.actions"
export const initialState =false;

export const themeChangeReducer = createReducer
(
    initialState,
    on(modeDarkActive,(state)=>!state)
);
