import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/service.index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  news: any = {}
  idCountry: string = 'mx'
  defaultCountry: string = 'México'
  notData:boolean=true;
  loading:boolean=false;
  newPrincipal:any={}
  newArr:any=[]

  
  constructor(public _getNews: NewsApiService) { }

  ngOnInit() {
    this.getNews(this.idCountry)
    this.validateDataExist()
  }

  goToNewUrl(url: string) {
    window.open(url, '_blank');
  }

  getNews(id: string) {
    this.loading=true;
    this.newArr=[]

    this._getNews.getByCountry(id).subscribe(
      response => {
        this.news = response;
        this.validateDataExist()
        if(this.news.articles.length!==0){          
          this.newPrincipal=this.news.articles[0]
          this.news.articles.map((item:any,index:number)=>{
            if(index!==0){
              this.newArr.push(item)
            }
          })
        }
        this.loading=false;

      }, error => {
        console.error('Failed in request: ', error);
        this.loading=false;

      }
    );
  }


  validateDataExist(){
    if(this.news.articles){
      if(this.news.articles.length===0){
        this.notData=true
      }else{
        this.notData=false
      }
    }
  }

}
