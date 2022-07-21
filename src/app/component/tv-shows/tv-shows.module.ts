import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from './tv-shows.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: TvShowsComponent


}];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class TvShowsModule { }
