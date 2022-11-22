import { Injectable } from '@angular/core';
import { users } from './app/dbmock';
import { User } from './app/model/User';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private users:User[]=users;
  constructor() { }
  public getUser(email:String):User|null {
    for (var i =0;this.users.length;i++ ){
      if(this.users[i].email==email)return this.users[i];
      
    }
    return null;
    
  }
}
