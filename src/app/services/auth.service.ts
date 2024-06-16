import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  Api_Url = 'http://localhost:3000';

  signup(user: User): Observable<User> {
    return this.http.post<User>(`${this.Api_Url}/signup`, user)
  }

  signin(user: User): Observable<User> {
    return this.http.post<User>(`${this.Api_Url}/signin`, user)
  }
}
