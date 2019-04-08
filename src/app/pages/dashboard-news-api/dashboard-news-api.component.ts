import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-news-api',
  templateUrl: './dashboard-news-api.component.html',
  styleUrls: ['./dashboard-news-api.component.css']
})
export class DashboardNewsApiComponent implements OnInit {
  @Output() back:EventEmitter<any>=new EventEmitter();
  @Input()  country:string;
  constructor() { }

  ngOnInit() {
  }

  goToBack(){
    this.back.emit()
  }

}
