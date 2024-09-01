import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }
  getAllUsers(){
    return this.http.get('api/users');
  }
}
