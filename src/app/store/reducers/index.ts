import { ActionReducer, ActionReducerMap, Action, MetaReducer } from '@ngrx/store';
import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';
import { createSelector } from 'reselect';

import * as fromPage from './page';

export interface State {
    page: fromPage.State;
}    

export const reducers: ActionReducerMap<State> = {
    page: fromPage.reducer
}

export const initialState: State = {
    page: fromPage.initialState
}

export const localStorageConfig: LocalStorageConfig = { 
    keys: ['page'],
    rehydrate: true 
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync(localStorageConfig)(reducer);
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];

export interface ActionWithPayload extends Action {
    payload?: any;
}

export const getPageState = (state: State) => state.page;

export const getPage = createSelector(getPageState, fromPage.getPage);
