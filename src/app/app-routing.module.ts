import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path: 'netflix',
    loadChildren: () => import('./landing/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path:'signin',
    loadChildren: () => import('./component/signin/signin.module').then((m) => m.SigninModule)
  },
  {
    path:'signup',
    loadChildren: () => import('./component/signup/signup.module').then((m) => m.SignupModule)
  },
  {
    path:'home',
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./component/home/home.module').then((m)=> m.HomeModule)
  },
  {
    path:'popular',
    canActivate:[AuthGuardGuard],
    loadChildren:() => import('./component/popular/popular.module').then((m) => m.PopularModule)
  },
  {
    path:'tvShows',
    canActivate:[AuthGuardGuard],
    loadChildren:() => import('./component/tv-shows/tv-shows.module').then((m) => m.TvShowsModule)
  },
  {
    path:'movies',
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./component/movies/movies.module').then((m) => m.MoviesModule)
  },
  {
    path:'children',
    canActivate:[AuthGuardGuard],
    loadChildren: ()=> import('./component/children/children.module').then((m) => m.ChildrenModule)
  },
  {
    path:'children/:id',
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./component/movie-details/movie-details.module').then((m)=> m.MovieDetailsModule)
  },
  {
    path:'movies/:id',
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./component/movie-details/movie-details.module').then((m)=> m.MovieDetailsModule)
  },
  {
    path:'home/:id',
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./component/movie-details/movie-details.module').then((m)=> m.MovieDetailsModule)
  },
  {
    path:'tvShows/:id',
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./component/tv-show-details/tv-show-details.module').then((m)=> m.TvShowDetailsModule)
  },
  {
    path:'**',
    loadChildren:() => import('./component/error404/error404.module').then((m) => m.Error404Module)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
