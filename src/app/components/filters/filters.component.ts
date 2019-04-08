import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/service.index';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(public _fiters:FiltersService) { }

  ngOnInit() {
  }

}
