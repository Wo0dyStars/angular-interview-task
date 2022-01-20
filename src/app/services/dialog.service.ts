import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';

export class Dialog {
  public title: string;
  public data: any;

  constructor(title: string, data: any) {
    this.title = title;
    this.data = data;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  panel(component: ComponentType<unknown>, data: any, title?: string ) {
    return new Promise((resolve, reject) => {
      const dialogData = new Dialog(title, data);

      const dialogReference = this.dialog.open(component, { data: dialogData });

      dialogReference.afterClosed().subscribe(dialogResult => {
        resolve(dialogResult);
      });
    })
  }
}