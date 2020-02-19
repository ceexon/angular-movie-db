import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-page-navigation',
  templateUrl: './movie-page-navigation.component.html',
  styleUrls: ['./movie-page-navigation.component.scss']
})
export class MoviePageNavigationComponent implements OnInit {

  query: string;

  // tslint:disable-next-line:variable-name
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['/search/' + this.query + '/results'], {queryParams: {query: this.query}});
  }

}
