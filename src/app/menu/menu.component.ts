import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() scale: boolean = false;

  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  constructor() { }
  ngOnInit(): void {

  }

  scrollToBanner() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  scrollToMyskills() {
    document.documentElement.scrollTop = document.body.scrollTop = 965;
    this.scale = true;
  }

  scrollToMyWorks() {
    document.documentElement.scrollTop = document.body.scrollTop = 2015;
  }

  scrollToAbout() {
    document.documentElement.scrollTop = document.body.scrollTop = 3925;
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
