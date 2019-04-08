import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls:['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  date:string=null;

  constructor(public _sidebar:SidebarService) { }

  ngOnInit() {
    const today=new Date();
    

    let aux=today.toString()
    const arrDate=aux.split(' ')
    this.date=`${arrDate[0]}, ${arrDate[1]} ${arrDate[2]}`;
  }

}
