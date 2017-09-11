import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';



@Injectable()
export class SetterService {

  private _url: string="http://localhost:3005/"
  constructor(private http:Http){}
  getConnection(){
    return this.http.get(this._url)
  //  .map((response:Response)=>response.json());
  }

   addfavNews(fav:any){
   	 return this.http
   	 .post(this._url+"users",fav)
   	 .subscribe(data=>{console.log("Data from post",data);});
   }
}
