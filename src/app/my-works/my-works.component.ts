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
      changeText: false
    },
    {
      name: 'JOIN',
      category: 'javascript',
      img: 'assets/img/join.jpg',
      url: 'http://radwansultan.de/join2',
      description: ' An App to coordinate Work.',
      changeText: false
    },
    {
      name: 'POKEDEX',
      category: 'javascript',
      img: 'assets/img/pokedex.png',
      url: 'http://radwansultan.de/pokedex',
      description: '  API-based Colection of Pokemoms.',
      changeText: false
    },
    {
      name: 'My Quiz App',
      category: 'angular',
      img: 'assets/img/quizApp.png',
      url: 'http://radwansultan.de/quizApp',
      description: '  It is a Quiz App.',
      changeText: false
    },
    {
      name: 'Notice Book',
      category: 'angular',
      img: 'assets/img/notizbuch.png',
      url: 'http://radwansultan.de/notizbuch',
      description: 'Add,Delete and save your Notices.',
      changeText: false
    },
    {
      name: 'Incomming',
      category: 'angular',
      img: 'assets/img/pexels-photo-546819-1024x680.jpeg',
      url: '',
      description: 'Incomming.',
      changeText: false
    },
    {
      name: 'Incomming',
      category: 'angular',
      img: 'assets/img/programmieren_software-entwickler-syntaxhervohebung.jpg',
      url: '',
      description: 'Incomming.',
      changeText: false
    },
    {
      name: 'Incomming',
      category: 'angular',
      img: 'assets/img/monitor-for-programming.jpg',
      url: '',
      description: 'Incomming.',
      changeText: false
    },
  ];

  filterdProjects = this.projects;

  slide: boolean = false;
  constructor(public router: Router) { }

  ngOnInit(): void { }

  filterProjects(category: string | null) {
    if (category !== 'all') {
      this.filterdProjects = this.projects.filter(
        (p) => p.category == category
      );
    } else {
      this.filterdProjects = this.projects;
    }
    this.slide = true;
  }

  reset() {
    this.slide = false;
  }
}
