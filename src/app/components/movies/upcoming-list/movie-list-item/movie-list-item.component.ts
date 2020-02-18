import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../../../models/movie.model';
import {MovieService} from '../../../../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  onSelectMovie() {
    this.router.navigate(['/movie/details', this.movie.id]);
  }

  onToggleFavorite() {
    this.movieService.toggleFavorite(this.movie);
  }

  onLoadImage(path: string, size: string) {
    return this.movieService.getImage(path, size);
  }
}
