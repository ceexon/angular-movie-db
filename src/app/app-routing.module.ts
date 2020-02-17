import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailComponent} from './components/movies/movie-detail/movie-detail.component';
import {FavouritesComponent} from './components/movies/favourites/favourites.component';
import {UpcomingListComponent} from './components/movies/upcoming-list/upcoming-list.component';

const routes: Routes = [
  { path: '', component: UpcomingListComponent },
  { path: 'movies/favourites', component: FavouritesComponent },
  { path: 'movie/details', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
