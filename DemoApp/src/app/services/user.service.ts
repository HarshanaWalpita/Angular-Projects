import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http:HttpClient) { }

  postUserData(user: IUser){
    return this.http.post(this.baseURL, user);
  }

  getUserList(){
    return this.http.get<IUser[]>(this.baseURL);
  }

  updateUser(user: IUser){

  }

  deleteUser(_id:string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
