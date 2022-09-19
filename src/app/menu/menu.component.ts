import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit(): void {}

  scrolltoSkills() {
    let el = document.getElementById('my-skills');
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrolltoAboutMe() {
    let el = document.getElementById('about');
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrolltoWorks() {
    let el = document.getElementById('my-works');
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  scrolltoBanner() {
    let el = document.getElementById('banner');
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

}
