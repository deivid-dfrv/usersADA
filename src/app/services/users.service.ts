import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  linkBase = "https://jsonplaceholder.typicode.com/users";
  
  getAllUsers() {
    return this.http.get(this.linkBase);
  }
}
