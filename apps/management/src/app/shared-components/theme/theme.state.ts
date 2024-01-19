import{
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { isDevMode } from '@angular/core';
import {themeChangeReducer} from '../theme/reducers/theme.reducer'

export interface State{

}
export const reducers: ActionReducerMap<State>={
    themeSelection:themeChangeReducer,
}

export const metaReducers:MetaReducer<State>[]= isDevMode()?[]:[]; 