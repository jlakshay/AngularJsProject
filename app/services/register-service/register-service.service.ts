import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterServiceService {

  constructor(private http: Http) { }

   register(data:any){
   	console.log(data)
	const url="http://localhost:3005/register";
	return this.http
	.post(url,data)
	.map((res:Response)=>{
		res.json();
		console.log(data)
	});
	}

}
