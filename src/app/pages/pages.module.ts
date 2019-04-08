import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { CountriesNewsApiComponent } from './countries-news-api/countries-news-api.component';
import { DashboardNewsApiComponent } from './dashboard-news-api/dashboard-news-api.component';
import { FiltersComponent } from '../components/filters/filters.component';

@NgModule({
  declarations: [PagesComponent, NewsapiComponent, CountriesNewsApiComponent, DashboardNewsApiComponent,FiltersComponent],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
