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
      category: 'javascript',
      img: 'assets/img/quizApp.png',
      url: 'http://radwansultan.de/quizApp',
      description: '  It is a Quiz App.',
      changeText: false
    },
    {
      name: 'Notice Book',
      category: 'javascript',
      img: 'assets/img/notizbuch.png',
      url: 'http://radwansultan.de/notizbuch',
      description: 'Add,Delete and save your Notices.',
      changeText: false
    },
    {
      name: 'Slack Clone',
      category: 'angular',
      img: 'assets/img/slack4.jpg',
      url: 'https://slack-clone-88afb.firebaseapp.com',
      description: 'Slack Clone with Angular.',
      changeText: false
    },
    {
      name: 'ToDo List',
      category: 'angular',
      img: 'assets/img/todo.png',
      url: 'https://todo-list-aa856.web.app',
      description: 'Todo List with Users accounts and Alarm.',
      changeText: false
    },
    {
      name: 'Hypercampus-Nuggets',
      category: 'angular',
      img: 'assets/img/e-health.png',
      url: 'https://hypercampus-nuggets.firebaseapp.com/home',
      description: 'E-Health learning Nuggets.',
      changeText: false
    },
    // {
    //   name: 'Food Shop',
    //   category: 'angular',
    //   img: 'assets/img/foodshop2.jpg',
    //   url: '',
    //   description: 'Food Shop with Angular.',
    //   changeText: false
    // },
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
