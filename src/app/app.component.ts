import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movieDetailPage = false;

  onOpenMovieDetailPage() {
    this.movieDetailPage = true;
  }

  onLeaveMovieDetailPage() {
    this.movieDetailPage = false;
  }
}
