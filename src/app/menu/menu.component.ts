import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() scale: boolean = false;

  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  constructor() {}
  ngOnInit(): void {}

  scrolltoAboutMe() {
    let el = document.getElementById('about');
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  showMenu() {
    document.getElementById('mobile-menu').classList.remove('hide-menu');
    document.getElementById('mobile-menu').classList.add('show-menu');
  }

  closeMenu() {
    document.getElementById('mobile-menu').classList.add('hide-menu');
    document.getElementById('mobile-menu').classList.remove('show-menu');
  }
}
