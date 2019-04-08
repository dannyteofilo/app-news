import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styles: []
})
export class NewsapiComponent implements OnInit {
  currentView:boolean=true;
  country:string=''
  idCountry:string='';
  constructor() { }

  ngOnInit() {
  }


  onChoose(event:any){
    console.log('Event: ',event)
    if(event){
      this.country=event.country;
      this.idCountry=event.id;
    }
    this.currentView=!this.currentView;
  }

}
