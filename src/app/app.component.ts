import { Component } from '@angular/core';
import { ApiPopulationService } from './api-population.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bluefield-technologies';
  settings: object = {
    base: 'http://api.population.io:80/1.0/population',
    country: 'Slovak%20Republic',
    year: '1990',
  }
  response: any;

  constructor(private http: HttpClient) {

  }

  search() {
    /* Countries */
    // this.http.get('http://api.population.io:80/1.0/countries')
    // .subscribe((response)=>{
    //   this.response = response;
    //   console.log(this.response);
    // });

    /* Current */
    this.http.get('http://api.population.io:80/1.0/population/1990/Slovak%20Republic/19/')
    .subscribe((response)=>{
      this.response = response[0];
      console.log(this.response);
    });
  }
}
