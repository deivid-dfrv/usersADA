import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {

  }

  linkBase = "https://jsonplaceholder.typicode.com/users";

  getAllUsers() {
    return this.http.get<User[]>(this.linkBase);
  }
}
