import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../models/movie.model';
import {MovieService} from '../../../services/movie.service';
import {UpcomingMoviesModels} from '../../../models/upcoming-movies.models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  movies: Movie[];
  query: string;
  loading = true;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.query = queryParams.query;
      this.loading = true;
      setTimeout(() => {
        this.movieService.searchMovie(this.query).subscribe(
            (response: UpcomingMoviesModels) => {
              this.movies = response.results.map(
                (movie: Movie) => {
                  movie.favorite = !!this.movieService.isFavorite(movie);
                  return movie;
              });
              this.loading = false;
              if (this.movies.length === 0) {
                this.movies = null;
              }
          });
      }, 600);
    });
  }

}
