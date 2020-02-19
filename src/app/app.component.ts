import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app component';

  constructor(private router: Router) {
  }
  ngOnInit(): void {
    const currentRoute = window.location.href.split('/')[3];
    if (currentRoute === '') {
      this.router.navigate(['upcoming']);
    }
  }
}
