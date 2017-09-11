import { Injectable } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';


@Injectable()
export class FavouriteService {
private _url: string="http://localhost:3005/";

  constructor(private http:Http) { }
   
   getConnected(){
   	return this.http.get(this._url);
   }

 	getNews(){
   	 return this.http
   	 .get(this._url)
   	 .map(res=>res.json().model,(error:any)=>error.json());
   }
}
