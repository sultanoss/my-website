import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToBanner() {
    document.getElementById('banner').scrollIntoView({behavior:"smooth"});
  }
  scrollToMyskills() {
    document.getElementById('my-skills').scrollIntoView({ behavior: 'smooth' });
  }

  scrollToMyWorks() {
    document.getElementById('my-works').scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }

}
