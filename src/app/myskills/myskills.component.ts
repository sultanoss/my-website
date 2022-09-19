import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss'],
})
export class MyskillsComponent implements OnInit {
  @Input() scale: boolean = false;

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
