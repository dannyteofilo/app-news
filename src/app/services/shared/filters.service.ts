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
      category:'bitcoin'
    },
    {
      title:'Healt',
      category:'healt'
    },
    {
      title:'Entertainment',
      category:'entertainment'
    },
    {
      title:'Science',
      category:'science'
    },
    {
      title:'Sports',
      category:'sports'
    },{
      title:'Technology',
      category:'technology'
    }
  ];
  constructor() { }
}
