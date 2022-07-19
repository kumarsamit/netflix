import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';


const routes: Routes = [{
  path: '',
  component:  MoviesComponent
}];



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesModule { }
