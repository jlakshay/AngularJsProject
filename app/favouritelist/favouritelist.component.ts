import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../services/favourite/favourite.service';

@Component({
  selector: 'app-favouritelist',
  templateUrl: './favouritelist.component.html',
  styleUrls: ['./favouritelist.component.css'],
  providers:[FavouriteService]
})
export class FavouritelistComponent implements OnInit {

 constructor(private getterservice:FavouriteService) { }
 
 data:any;
	getConnection():void{
		this.getterservice.getConnected()
		.subscribe(res=>{console.log("This is Connected")});
	}
	showNews(){
		this.getConnection();
		this.getterservice.getNews()
		.subscribe(res=>{this.data=res;});
	}

  ngOnInit() {
  	this.showNews();
  }

}
