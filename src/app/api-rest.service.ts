import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  
  urlapi = "http://localhost:3000/"

  constructor(
    private http:HttpClient
  ) { }
  Post(action, json){
    var url = this.urlapi+action
    return this.http.post(url, json)
  }

  Get(action){
    var url = this.urlapi+action
    return this.http.get(url)
  }
}
