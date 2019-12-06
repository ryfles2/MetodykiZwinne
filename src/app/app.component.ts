import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'SmartPoolSystem';
  routerUrl: string;

  constructor(private router: Router) {
    this.routerUrl = router.url;
    console.log(this.routerUrl);
  }
}
