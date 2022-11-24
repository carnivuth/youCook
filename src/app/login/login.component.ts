import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private ls:LoginService, private ss:SessionService, private router:Router) { }
  @Input() public email?:string;
  @Input()  public password?:string;
  public  login():void {
    if(this.email!=null && this.password!=null){
      if(this.ls.login(this.email,this.password)){
        this.ss.setUsername(this.email);
        this.router.navigate(["recipes"]);
      }
    }
    
    
  }

}
