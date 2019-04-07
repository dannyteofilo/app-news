import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessComponent } from './business/business.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const pagesRoutes:Routes=[
    {
        path:'',component:PagesComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'business',component:BusinessComponent},
            {path:'bitcoin',component:BitcoinComponent},
            {path:'entertainment',component:EntertainmentComponent},
            {path:'science',component:ScienceComponent},
            {path:'sports',component:SportsComponent},
            {path:'technology',component:TechnologyComponent}
        ]

    }
];

export const PAGES_ROUTES= RouterModule.forChild(pagesRoutes);