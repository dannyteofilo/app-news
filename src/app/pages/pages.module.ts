import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';
import { NewsapiComponent } from './newsapi/newsapi.component';

@NgModule({
  declarations: [PagesComponent, NewsapiComponent],
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
