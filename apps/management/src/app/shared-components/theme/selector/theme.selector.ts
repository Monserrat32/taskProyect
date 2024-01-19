import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectThemeState = createFeatureSelector<boolean>('themeSelection');

export const selectIsModeThemeDark = createSelector(
  selectThemeState,
  (state: boolean) => state
);