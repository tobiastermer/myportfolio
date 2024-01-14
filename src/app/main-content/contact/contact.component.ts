import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @ViewChild('form') form!: ElementRef;
  @ViewChild('formName') formName!: ElementRef;
  @ViewChild('formEmail') formEmail!: ElementRef;
  @ViewChild('formMessage') formMessage!: ElementRef;
  @ViewChild('formButton') formButton!: ElementRef;

  async sendMail() {
    // action https://f0164f24@w01eabb4.kasserver.com/assets/server/send_mail.php
    console.log("Sending mail");
    let formName = this.formName.nativeElement;
    let formEmail = this.formEmail.nativeElement;
    let formMessage = this.formMessage.nativeElement;
    let formButton = this.formButton.nativeElement;
    formName.disabled = true;
    formEmail.disabled = true;
    formMessage.disabled = true;
    formButton.disabled = true;

    let fd = new FormData();
    fd.append('name', formName.value);
    fd.append('email', formEmail.value);
    fd.append('message', formMessage.value);

    await fetch('https://www.portfolio.tobias-termer.de/assets/server/send_mail.php',
    
      {
        method: 'POST',
        body: fd
      });

    // Text Nachricht gesendet

    formName.disabled = false;
    formEmail.disabled = false;
    formMessage.disabled = false;
    formButton.disabled = false;
  }
}
