import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  scrollToFooter() {
    this.router.url == 'myskills/#footer';
  }
}
