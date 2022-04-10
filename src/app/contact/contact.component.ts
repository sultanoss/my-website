import { HttpClient } from '@angular/common/http';
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



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // handleSend() {
  //   console.log(this.name);
  //   // console.log(this.email);
  //   console.log(this.message);
  //   this.clearForm();
  // }

  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  handleSubmit(ngForm){
    console.log(ngForm);
    this.http.post('https://radwansultan.de/send_mail.php', JSON.stringify(ngForm.form.value))
    .subscribe(
     {
       next :  (response)=> {
         window.alert("Message Received");
       },
       error : (error)=> console.error(error)
     }
    )

    this.clearForm();
  }

  // action="https://radwansultan.de/send_mail.php" method="POST"

}
