import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessComponent } from './business/business.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent,DashboardComponent, BusinessComponent, BitcoinComponent, HealthComponent, EntertainmentComponent, ScienceComponent, SportsComponent, TechnologyComponent],
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
