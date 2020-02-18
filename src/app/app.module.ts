import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpcomingListComponent } from './components/movies/upcoming-list/upcoming-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { MovieListItemComponent } from './components/movies/upcoming-list/movie-list-item/movie-list-item.component';
import {MovieService} from './services/movie.service';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviePageNavigationComponent } from './components/movie-detail/movie-page-navigation/movie-page-navigation.component';
import { SearchComponent } from './components/movies/search/search.component';
import {MovieResolverService} from './services/movie-resolver.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {FavouritesComponent} from './components/movies/favourites/favourites.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SearchBarComponent,
    UpcomingListComponent,
    MovieDetailComponent,
    FavouritesComponent,
    MovieListItemComponent,
    MoviesComponent,
    MoviePageNavigationComponent,
    SearchComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MovieService,
    MovieResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
