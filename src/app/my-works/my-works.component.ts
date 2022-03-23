import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss']
})
export class MyWorksComponent implements OnInit {

  changeText:boolean = false;
  changeText2:boolean = false;
  changeText3:boolean = false;
  changeText4:boolean = false;
  changeText5:boolean = false;
  changeText6:boolean = false;
  changeText7:boolean = false;
  changeText8:boolean = false;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
