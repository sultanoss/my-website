import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  constructor() {}

  ngOnInit(): void {}

  scrollToBanner() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  scrollToMyskills() {
    document.documentElement.scrollTop = document.body.scrollTop = 965;
  }

  scrollToMyWorks() {
    document.documentElement.scrollTop = document.body.scrollTop = 2015;
  }

  scrollToAbout() {
    document.documentElement.scrollTop = document.body.scrollTop = 3925;
  }
}
