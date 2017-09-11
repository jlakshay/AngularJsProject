import { Component, Input, OnInit} from '@angular/core';
import { SetterService } from '../services/data-setter/setter.service';

@Component({
  selector: 'app-search-detail-component',
  templateUrl: './search-detail-component.component.html',
  styleUrls: ['./search-detail-component.component.css'],

})

export class SearchDetailComponentComponent implements OnInit {

constructor(private httpservice:SetterService){}

	 addFav(data:any){
	 	this.getConnected();
		this.httpservice.addfavNews(data);
	 }

	getConnected():void{
		this.httpservice.getConnection()
		.subscribe(res=>{console.log("This is Connected")});
	}

	ngOnInit(){
		this.getConnected();
	}

@Input() completeData
}
