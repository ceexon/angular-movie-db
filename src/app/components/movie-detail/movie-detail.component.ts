import {Component, OnInit} from '@angular/core';
import {MovieDetailModel} from '../../models/movie-detail.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: MovieDetailModel;
  isFav: boolean;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.route.snapshot.params.id).subscribe(
      (movie) => {
        this.movie = movie;
        this.isFav = !!this.movieService.isFavorite(movie);
      }
    );
  }

  onToggleFavorite() {
    this.isFav = !this.isFav;
    this.movieService.toggleFavorite(this.movie);
  }

  onLoadImage(path: string, size: string) {
    return this.movieService.getImage(path, size);
  }
}
