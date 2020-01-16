import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errno404',
  templateUrl: './errno404.component.html',
  styleUrls: ['./errno404.component.less']
})
export class Errno404Component implements OnInit {

  localRouterUrl: string;

  constructor(private localRouter: Router) {
    this.localRouterUrl = localRouter.url;
    console.log(this.localRouterUrl);
  }

  ngOnInit() {
  }

}
