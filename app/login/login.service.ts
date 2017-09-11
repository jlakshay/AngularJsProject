import { Injectable } from '@angular/core';
    import { Http, Response }       from '@angular/http';
    import { Observable }     from 'rxjs/Observable';
    import 'rxjs/add/operator/map';

    
    @Injectable()
    export class LoginService {
      obs : Observable<any>;
       data:any;
      private loginUrl = 'http://localhost:3005/login/';
     
      constructor(private http: Http) {}
     
     
      login(data:any):Observable<any> {
          
          	console.log("Hello from service");
          	console.log(data);	
            return this.http.get(this.loginUrl+data)
            .map((response)=>{return response.json()[0]});
            }
      
    }