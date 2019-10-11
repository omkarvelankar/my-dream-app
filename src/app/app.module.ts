import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralComponent } from './Component/structural/structural.component';
import { StudentformComponent } from './Component/studentform/studentform.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    StudentformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
