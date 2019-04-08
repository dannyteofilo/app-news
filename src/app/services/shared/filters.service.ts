import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  menu:any=[    
    {
      title:'Business',
      category:'business',
      icon:'assets/icons/filters_business.svg'
    },
    {
      title:'Bitcoin',
      category:'bitcoin',
      icon:'assets/icons/filters_bitcoin.svg'
    },
    {
      title:'Healt',
      category:'healt',
      icon:'assets/icons/filters_health.svg'
    },
    {
      title:'Entertainment',
      category:'entertainment',
      icon:'assets/icons/filters_entertainment.svg'
    },
    {
      title:'Science',
      category:'science',
      icon:'assets/icons/filters_science.svg'
    },
    {
      title:'Sports',
      category:'sports',
      icon:'assets/icons/filters_sports.svg'
    },{
      title:'Technology',
      category:'technology',
      icon:'assets/icons/filters_tech.svg'
    }
  ];
  constructor() { }
}
