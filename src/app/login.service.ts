import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/database.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private dbs:DatabaseService ) { }
  
  public login(email:String, password:String):boolean {
    var user = this.dbs.getUser(email);
    if(user!=null && user.password==password)return true;
    return false;
    
  }
}
