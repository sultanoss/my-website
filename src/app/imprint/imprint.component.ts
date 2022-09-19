import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.scrollToBanner();
  }

  scrollToBanner() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
}
