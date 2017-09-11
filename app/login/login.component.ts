import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginService} from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
passwordrecieved :any;
password:any;


  constructor(private loginservice:LoginService, private router:Router) {} 
data={};

login(obj:any){
    console.log("hello from login"+obj.password)  ;  
    let getpass:string;
      this.loginservice.login(obj.email).subscribe(response=>{
        if(response!=undefined)
        {
          if(response.password==obj.password)
           { alert("LoginSuccess!")
            this.router.navigateByUrl("/home");
            }
          else
            alert("WrongPAssword!")
        }
        else alert("Wrong Email: Register here!")
      });
    }
  ngOnInit() 
  {
  }

}