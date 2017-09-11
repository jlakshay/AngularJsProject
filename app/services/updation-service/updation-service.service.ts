import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UpdationServiceService {

  constructor(private http:Http) { }
  updateNews(news:any):Observable<any>
  {
	const updateurl="http://localhost:3005/update/"+news._id;
  	return this.http
  	.put(updateurl,news)
  	.map((res:Response)=>{
  		<any[]>res.json().user;
      console.log(res);
  	});
  }

}
