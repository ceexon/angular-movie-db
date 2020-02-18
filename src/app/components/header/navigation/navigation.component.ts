import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  activePage = 'up';

  constructor() { }

  ngOnInit(): void {
    const currentPath =  window.location.pathname;
    if (currentPath === '' || currentPath === 'upcoming') {
      this.activePage = 'up';
    } else if (currentPath === '/movies/favourites') {
      this.activePage = 'fav';
    } else {
      this.activePage = 'up';
    }
  }

  onLinkClick(page: string) {
    this.activePage = page;
  }

}
