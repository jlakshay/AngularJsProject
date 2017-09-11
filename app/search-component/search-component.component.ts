import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {SearchComponentServiceService} from '../services/SearchComponentService/search-component-service.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  
  constructor(private channelService : SearchComponentServiceService) { }
  channelName : string = "";
  channelDataList : any = [];
  id:any;
  data=[];
  @Output()
  channelOut : EventEmitter<any> = new EventEmitter<any>(); 

  getChannel() : void {
    this.channelService.getChannel(this.channelName)
      .subscribe(data=>{this.channelDataList = data; });
     
  }
  onSelect(id){
    this.id=id;
    console.log(id);
    this.showData();
  }

  showData(){
    this.channelService.getArticle(this.id)
      .subscribe(data=>{this.channelOut.emit(data)});
  }

  ngOnInit() {
  	this.getChannel();
  }

}
