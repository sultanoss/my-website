import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  name: string;
  email: string;
  message: string;



  constructor() { }

  ngOnInit(): void {
  }

  handleSend() {
    console.log(this.name);
    // console.log(this.email);
    console.log(this.message);
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    // this.email = '';
    this.message = '';
  }

}
