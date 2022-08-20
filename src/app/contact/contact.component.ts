import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  name: string;
  email: string;
  message: string;



  constructor(private http: HttpClient,
    private toast: HotToastService,) { }

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
        this.toast.success('Message sent successfully 👍');
       },
       error : (error)=> console.error(error)
     }
    )

    this.clearForm();
  }

  // action="https://radwansultan.de/send_mail.php" method="POST"

}
