import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../services/register-service/register-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[RegisterServiceService]
})
export class RegisterComponent implements OnInit {

  constructor(private regService:RegisterServiceService, private route:Router) { }
 
  data:any={};
  info:any={};
   retrieveData(obj:any){
   	console.log(this.data)
  this.regService.register(this.data)
  .subscribe((data)=>{ this.info=this.data ; })
   this.route.navigateByUrl('login');
   }
  ngOnInit() {
  	
  }

}
