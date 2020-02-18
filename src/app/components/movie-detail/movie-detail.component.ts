import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  movieDate: string;
  isFav: boolean;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data) => {
        this.movie = data.movie;
        this.isFav = this.movie.favorite;
        // this.movieDate = new Date(this.movie.releaseDate).toDateString();
      }
    );
  }

  onToggleFavorite() {
    this.isFav = !this.isFav;
    this.movieService.toggleFavorite(this.movie);
  }
}
