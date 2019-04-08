import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CountriesService } from 'src/app/services/service.index';

@Component({
  selector: 'app-countries-news-api',
  templateUrl: './countries-news-api.component.html',
  styleUrls: ['./countries-news-api.component.css']
})
export class CountriesNewsApiComponent implements OnInit {


  @Output() chooseCountry:EventEmitter<country>=new EventEmitter();
  
  constructor(public data:CountriesService) { }

  ngOnInit() {
  }

  onClick(id:string,country:string){
    event.preventDefault();
    console.log('Id: ',id)
    const data={id,country}
    this.chooseCountry.emit(data);
  }

}

interface country{
  id:string
  country:string
}
