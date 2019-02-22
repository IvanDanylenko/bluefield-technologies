import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ApiPopulationService } from './api-population.service';
import { HomeComponent } from './home/home.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task1', component: Task1Component},
  {path: 'task2', component: Task2Component},
  {path: 'task3', component: Task3Component}
]

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiPopulationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
