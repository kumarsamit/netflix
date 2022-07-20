import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details.component';
import {SafeurlPipe} from './sanitize.pipe'

const routes: Routes = [{
  path: '',
  component:  MovieDetailsComponent

}];

@NgModule({
  declarations: [SafeurlPipe],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class MovieDetailsModule { }
