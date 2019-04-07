import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarService} from './service.index'

@NgModule({
  declarations: [],
  providers:[
    SidebarService
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
