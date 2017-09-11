import { Component, Input } from '@angular/core';
import {SearchComponentServiceService} from './services/SearchComponentService/search-component-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SearchComponentServiceService]
})
export class AppComponent{
	// obj=[];
 // 	newsData(news){
 // 		this.obj=news;
 // 		console.log(this.obj);
 // 	}

}
