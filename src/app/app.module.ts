import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { FormsComponent } from './forms/forms.component';
import {ConfirmComponent} from "./confirm/confirm.component";
import { routing } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DatabaseComponent,
    FormsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
