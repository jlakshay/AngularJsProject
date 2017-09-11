import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-search-list-component',
  templateUrl: './search-list-component.component.html',
  styleUrls: ['./search-list-component.component.css']
})
export class SearchListComponentComponent {
	@Input() articleData
  	constructor() { }
}
