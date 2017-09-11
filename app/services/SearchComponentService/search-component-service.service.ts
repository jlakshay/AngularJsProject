import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchComponentServiceService {


constructor(private http : Http) { }
private url = 'https://newsapi.org/v1/sources?language=en';
  	getChannel(channel:any){
    return this.http.get(this.url)
    .map((response:Response)=>response.json().sources);
 }

	getArticle(channelId){
	    return this.http.get(' https://newsapi.org/v1/articles?source='+channelId+'&apiKey=3333c56f998143708cbe06f6f47d6136')
	    .map((response:Response)=>response.json().articles);
	}
}
