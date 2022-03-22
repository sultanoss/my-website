import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit(): void {}

  scrollToMyskills() {
    document.documentElement.scrollTop = document.body.scrollTop = 965;
  }

  scrollToContact() {
    document.documentElement.scrollTop = document.body.scrollTop = 4800;
  }
}
