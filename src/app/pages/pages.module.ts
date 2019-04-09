import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { CountriesNewsApiComponent } from './countries-news-api/countries-news-api.component';
import { DashboardNewsApiComponent } from './dashboard-news-api/dashboard-news-api.component';
import { FiltersComponent } from '../components/filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [PagesComponent, NewsapiComponent, CountriesNewsApiComponent, DashboardNewsApiComponent,FiltersComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    HttpClientModule
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
