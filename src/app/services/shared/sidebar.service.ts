import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any=[    
    {
      title:'Business',
      url:'/business'
    },
    {
      title:'Bitcoin',
      url:'/bitcoin'
    },
    {
      title:'Healt',
      url:'/healt'
    },
    {
      title:'Entertainment',
      url:'/entertainment'
    },
    {
      title:'Science',
      url:'/science'
    },
    {
      title:'Sports',
      url:'/sports'
    },{
      title:'Technology',
      url:'/technology'
    }
  ];
  constructor() { }
}
