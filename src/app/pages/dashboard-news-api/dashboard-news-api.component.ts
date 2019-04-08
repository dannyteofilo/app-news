import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewsApiService } from 'src/app/services/service.index';

@Component({
  selector: 'app-dashboard-news-api',
  templateUrl: './dashboard-news-api.component.html',
  styleUrls: ['./dashboard-news-api.component.css']
})
export class DashboardNewsApiComponent implements OnInit {
  @Output() back: EventEmitter<any> = new EventEmitter();
  @Input() country: string;
  @Input() id: string;
  news: any = {}
  idCountry: string = 'mx'
  defaultCountry: string = 'México'
  constructor(public _getNews: NewsApiService) { }

  ngOnInit() {
    // this.getNews(this.id ? this.id : this.idCountry)

  }

  goToBack() {
    this.back.emit()
  }

  goToNewUrl(url: string) {
    console.log('Url: ', url);

    window.open(url, '_blank');
  }

  getNews(id: string) {
    this._getNews.getByCountry(id).subscribe(
      response => {
        this.news = response;
      }, error => {
        console.error('Failed in request: ', error);
      }
    );
  }

}

