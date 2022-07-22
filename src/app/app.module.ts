import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './common-component/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MoviesComponent } from './component/movies/movies.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { Error404Component } from './component/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './common-component/header/header.component';
import { PreviewComponent } from './component/preview/preview.component';
import { HomeComponent } from './component/home/home.component';
import { TvShowsComponent } from './component/tv-shows/tv-shows.component';
import { PopularComponent } from './component/popular/popular.component';
import { ChildrenComponent } from './component/children/children.component';
import { TomCruiseComponent } from './component/categories/tom-cruise/tom-cruise.component';
import { BestDramaComponent } from './component/categories/best-drama/best-drama.component';
import { PopularMoviesComponent } from './component/categories/popular-movies/popular-movies.component';
import { ScienceFictionComponent } from './component/categories/science-fiction/science-fiction.component';
import { PupularKidsComponent } from './component/categories/pupular-kids/pupular-kids.component';
import { ComedyMoviesComponent } from './component/categories/comedy-movies/comedy-movies.component';
import { RmoviesComponent } from './component/categories/rmovies/rmovies.component';
import { BradPittComponent } from './component/categories/brad-pitt/brad-pitt.component';
import { HighestGrossingComponent } from './component/categories/highest-grossing/highest-grossing.component';
import { Best2010Component } from './component/categories/best2010/best2010.component';
import { Best2000Component } from './component/categories/best2000/best2000.component';

import { Best2015Component } from './component/categories/best2015/best2015.component';

import { PopularTvShowsComponent } from './component/categories/popular-tv-shows/popular-tv-shows.component';
import { TvShowDetailsComponent } from './component/tv-show-details/tv-show-details.component';







@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    MoviesComponent,
    MovieDetailsComponent,
    Error404Component,
    SigninComponent,
  HeaderComponent,
    SignupComponent,
    PreviewComponent,
    HomeComponent,
    TvShowsComponent,
    PopularComponent,
    ChildrenComponent,
    TomCruiseComponent,
    BestDramaComponent,
    PopularMoviesComponent,
    ScienceFictionComponent,
    PupularKidsComponent,
    ComedyMoviesComponent,
    RmoviesComponent,
    BradPittComponent,
    HighestGrossingComponent,
    Best2010Component,
    PopularTvShowsComponent,
    TvShowDetailsComponent,
    Best2015Component,
    Best2000Component

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    SlickCarouselModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


