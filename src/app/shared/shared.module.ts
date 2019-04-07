import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, NopagefoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NopagefoundComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
