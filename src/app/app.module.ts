import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { SpeakerComponent } from './shared/dialog/speaker/speaker.component';
import { ItemComponent } from './components/speakers/list/item/item.component';
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store/reducers/index";
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    SpeakerComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


