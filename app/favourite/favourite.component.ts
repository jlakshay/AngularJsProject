import { Component, OnInit, Input } from '@angular/core';
import {  DeleteFavouriteService } from '../services/favourite/delete-favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  providers:[DeleteFavouriteService]
})
export class FavouriteComponent implements OnInit {	
  
dataresponse:any;
updatedData:any; 
  constructor(private deleteService:DeleteFavouriteService ) { }


 @Input() completeData

deleteFunction(deletedDataId:any){
    console.log("this is function "+deletedDataId);
  	this.deleteService.deleteNews(deletedDataId)
  	.subscribe(res=>{this.dataresponse=res;console.log(this.dataresponse);});
  }

 updateFunction(update){
   this.updatedData=update;
 }

  ngOnInit() {
    
  }

}
