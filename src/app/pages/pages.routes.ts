import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { NewsapiComponent } from './newsapi/newsapi.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes:Routes=[
    {
        path:'',component:PagesComponent,
        children:[
            {path:'',component:DashboardComponent},
            {path:'newsapi',component:NewsapiComponent}
        ]

    }
];

export const PAGES_ROUTES= RouterModule.forChild(pagesRoutes);