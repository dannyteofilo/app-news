import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from './pages.component';
import { NewsapiComponent } from './newsapi/newsapi.component';

const pagesRoutes:Routes=[
    {
        path:'',component:PagesComponent,
        children:[
            {path:'newsapi',component:NewsapiComponent}
        ]

    }
];

export const PAGES_ROUTES= RouterModule.forChild(pagesRoutes);