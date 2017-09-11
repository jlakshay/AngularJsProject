import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class SearchListComponentService {
	channelId : string = "";
  	constructor(private http : Http) { }
	private _url='https://newsapi.org/v1/articles?source='+this.channelId+'&sortBy=latest&apiKey={API_KEY}';
	getArticle(article:any){
	    return this.http.get(this._url)
	    .map((response:Response)=>response.json());
	}
}
