import { Component,  Input } from '@angular/core';
import { UpdationServiceService } from '../services/updation-service/updation-service.service';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css'],
  providers:[UpdationServiceService]
})
export class UpdateModuleComponent  {
	data:any
	@Input() inputNews
  constructor(private updateService: UpdationServiceService) { }

  updateFunc(inputNews){
	  	this.updateService.updateNews(inputNews)
	  	.subscribe((res)=>{
	  			this.data=res;
	        alert("successfully updated")
	  	});
	}
}