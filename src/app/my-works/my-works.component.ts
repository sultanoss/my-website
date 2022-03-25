import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss'],
})
export class MyWorksComponent implements OnInit {
  projects = [
    {
      name: 'Sharky',
      category: 'javascript',
      img: 'assets/img/sharkyy.jpg',
      url: 'https://radwansultan.de/sharky',
      description: ' Jump and run Game.',
    },
    {
      name: 'JOIN',
      category: 'javascript',
      img: 'assets/img/join.jpg',
      url: 'http://radwansultan.de/join2',
      description: ' An App to coordinate Work.',
    },
    {
      name: 'POKEDEX',
      category: 'javascript',
      img: 'assets/img/pokedex.png',
      url: 'http://radwansultan.de/pokedex',
      description: '  API-based Colection of Pokemoms.',
    },
    {
      name: 'Mx Quiz App',
      category: 'angular',
      img: 'assets/img/quizApp.png',
      url: 'http://radwansultan.de/quizApp',
      description: '  It is a Quiz App.',
    },
  ];

  filterdProjects = this.projects;

  changeText0: boolean = false;
  changeText1: boolean = false;
  changeText2: boolean = false;
  changeText3: boolean = false;
  changeText4: boolean = false;
  changeText5: boolean = false;
  changeText6: boolean = false;
  changeText7: boolean = false;

  slide: boolean = false;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  filterProjects(category: string | null) {
    if (category !== 'all') {
      this.filterdProjects = this.projects.filter(
        (p) => p.category == category
      );
    } else {
      this.filterdProjects = this.projects;
    }
    this.slide = true;
    // setTimeout(() => {
    //   this.reset();
    // }, 500);
    
  }

  reset(){
    this.slide = false;
  }
}
