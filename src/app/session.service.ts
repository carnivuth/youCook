import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private username="example@gmail.com";
  constructor() { }
  public getUsername(){
    return this.username;
  }

  public setUsername(username:string){
    this.username=username;
  }
}
