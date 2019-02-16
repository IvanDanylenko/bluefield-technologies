import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ApiPopulationService } from './api-population.service';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiPopulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
