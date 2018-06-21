import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Formpart1Component } from './formpart1/formpart1.component';
import { Formpart2Component } from './formpart2/formpart2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http";
import { HttpService } from "src/app/http.service";

@NgModule({
  declarations: [
    AppComponent,
    Formpart1Component,
    Formpart2Component,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }