import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent 
  ],
  imports: [
    CommonModule

  ],
  providers: [],
  exports: [HeaderComponent]
})
export class HeaderModule { }