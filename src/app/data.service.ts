import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public http : HttpClient,
  ) { 

  }

  getData(){
    let url = "https://my.api.mockaroo.com/product_catalog.json?key=866ae800";
    return this.http.get(url);
  }

}
