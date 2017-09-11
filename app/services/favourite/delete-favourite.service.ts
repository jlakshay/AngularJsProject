import { Injectable } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

@Injectable()
export class DeleteFavouriteService {

  private _url: string="http://localhost:3005/delete/"
  constructor(private http:Http){}
  
  getConnection(){
    return this.http.get(this._url)
  }

   deleteNews(articleId:string){
     console.log("service called");
   	 return this.http
   	 .delete(this._url+articleId)
   	 .map(res=>{res.json(); console.log(res.json());},(error:any)=>error.json());
   }

}
