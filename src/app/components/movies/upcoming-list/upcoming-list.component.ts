import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../services/movie.service';
import {Movie} from '../../../models/movie.model';
import {UpcomingMoviesModels} from '../../../models/upcoming-movies.models';

@Component({
  selector: 'app-upcoming-list',
  templateUrl: './upcoming-list.component.html',
  styleUrls: ['./upcoming-list.component.scss']
})
export class UpcomingListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
      this.movieService.fetUpcoming().subscribe(
        (response: UpcomingMoviesModels) => {
          this.movies = response.results.map(
            (movie: Movie) => {
              movie.favorite = !!this.movieService.isFavorite(movie);
              return movie;
          });
          this.movieService.setMovies(response.results);
      });
  }

}
