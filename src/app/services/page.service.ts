import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from "../store/reducers";
import * as pageActions from "../store/actions/page";

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private store: Store<fromRoot.State>) { }

  public getPage(): Observable<PageEvent> {
    return this.store.select(fromRoot.getPage);
  }

  public setPage(page: PageEvent): void {
    this.store.dispatch(pageActions.SetPage({ payload: page }));
  }
}