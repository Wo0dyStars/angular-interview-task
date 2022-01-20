import { createReducer, on } from '@ngrx/store';
import { PageEvent as State } from "@angular/material/paginator";
import { initialPage as initialState } from '../../models/page';
import * as pagesAction from '../actions/page';
import { ActionWithPayload } from './index';

export { State, initialState };

const featureReducer = createReducer(
  initialState,
  on(pagesAction.SetPage, (state, action) => ( { ...action.payload } ))
);
  
export function reducer(state: State = initialState, action: ActionWithPayload) {
  return featureReducer(state, action);
}

export const getPage = (state: State) => state;