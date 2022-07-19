import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { HeaderInnerComponent } from './header-inner/header-inner.component';


const routes: Routes = [{
  path: '',
  component:  MoviesComponent
}];



@NgModule({
  declarations: [
    HeaderInnerComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesModule { }
