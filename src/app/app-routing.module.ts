import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import {FavouritesComponent} from './components/movies/favourites/favourites.component';
import {UpcomingListComponent} from './components/movies/upcoming-list/upcoming-list.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieResolverService} from './services/movie-resolver.service';
import {SearchComponent} from './components/movies/search/search.component';

const routes: Routes = [
  { path: '', component: MoviesComponent, children: [
      { path: 'upcoming', component: UpcomingListComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'search/:query/results', component: SearchComponent },
    ]},
  { path: 'movie/details/:id', component: MovieDetailComponent, resolve: {movie: MovieResolverService} },
  {path: '**', redirectTo: 'upcoming'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
