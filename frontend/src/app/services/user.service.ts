import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../Shared/Models/user';
import { IUserLogin } from '../Shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';
import { USER_LOGIN_URL } from '../Shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient) {
    this.userObservable = this.userSubject.asObservable();
   }
  
   login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userLogin).
    pipe(tap({
      next: (user)=>{
        this.userSubject.next(user);
        console.log("Login successfull")
      },
      error: (errorResponse) =>{
        console.log("Log in failed. ",errorResponse)
      }
    }));
   }
}
