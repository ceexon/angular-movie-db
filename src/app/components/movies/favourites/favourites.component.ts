import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../models/movie.model';
import {MovieService} from '../../../services/movie.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.movieService.getFavorites();
    this.movieService.favoritesUpdated.subscribe(
      (ms: Movie[]) => {
        this.movies = ms;
      }
    );
  }

}
