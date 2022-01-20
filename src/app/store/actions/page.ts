import { PageEvent } from '@angular/material/paginator';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    SET_PAGE = '[Page] Set page'
}

export const SetPage = createAction(ActionTypes.SET_PAGE, props<{payload: PageEvent}>());