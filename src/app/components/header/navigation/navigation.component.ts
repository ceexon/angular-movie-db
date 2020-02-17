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
    if (currentPath === '') {
      this.activePage = 'up';
    } else if (currentPath === '/movies/favourites') {
      this.activePage = 'fav';
    } else {
      this.activePage = 'up';
    }

    console.log(currentPath);
  }

  onLinkClick(page: string) {
    this.activePage = page;
  }

}
