import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UpcomingListComponent } from './components/movies/upcoming-list/upcoming-list.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { MovieListItemComponent } from './components/movies/upcoming-list/movie-list-item/movie-list-item.component';
import { MoviesComponent } from './components/movies/movies.component';
import {MovieService} from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UpcomingListComponent,
    MovieDetailComponent,
    SearchBarComponent,
    NavigationComponent,
    MovieListItemComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
