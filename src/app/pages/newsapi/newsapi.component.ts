import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styles: []
})
export class NewsapiComponent implements OnInit {
  currentView:boolean=true;
  country:string=''
  constructor() { }

  ngOnInit() {
  }


  onChoose(event:any){
    console.log('Event: ',event)
    if(event){
      this.country=event.country;
    }
    this.currentView=!this.currentView;
  }

}
