import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FiltersService } from 'src/app/services/service.index';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() chooseCategory:EventEmitter<string>=new EventEmitter();

  constructor(public _fiters:FiltersService) { }

  ngOnInit() {
  }

  byCategory(category:string){
    event.preventDefault();
    console.log('Category: ',category)
    this.chooseCategory.emit(category)
  }


}
