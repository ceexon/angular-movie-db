import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MovieService} from '../../services/movie.service';
import {MovieDetailModel} from '../../models/movie-detail.model';
import {Movie} from "../../models/movie.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: MovieDetailModel;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.route.snapshot.params.id).subscribe(
      (movie: MovieDetailModel) => {
        this.movie = movie;
        this.movie.favorite = !!this.movieService.isFavorite(movie);
      }
    );
  }

  onToggleFavorite() {
    this.movieService.toggleFavorite(this.movie);
    this.movieService.favoriteWasUpdated.subscribe(
     (movie: Movie | MovieDetailModel) => {
       this.movie.favorite = movie.favorite;
     }
   );
  }

  onLoadImage(path: string, size: string) {
    return this.movieService.getImage(path, size);
  }
}
