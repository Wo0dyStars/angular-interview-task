import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';

export const routes: Routes = [
  {
    path: "",
    component: ListComponent
  }
]

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class SpeakersModule { }