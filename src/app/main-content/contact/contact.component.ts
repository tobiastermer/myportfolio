import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule], // FormsModule hinzugefügt
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('form') form!: NgForm;
  formSubmittedSuccessfully = false; // Neuer Status für Erfolgsmeldung

  areAllFieldsEmpty(): boolean {
    if (!this.form || !this.form.value) {
      return true;
    }
    return !this.form.value.name && !this.form.value.email && !this.form.value.message;
  }

  isValidEmail(email: string): boolean {
    // Regulärer Ausdruck für eine strenge E-Mail-Validierung
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }

  async sendMail() {
    if (this.form.invalid) {
      // Benutzerbenachrichtigung hinzufügen, falls erforderlich
      return;
    }

    this.toggleFormDisabled(true);
    const formData = this.prepareFormData();

    try {
      await this.performMailSend(formData);
    } catch (error) {
      console.error('Fehler beim Senden der E - Mail: ', error);
      // Fehlermeldung hinzufügen
    } finally {
      this.toggleFormDisabled(false);
    }
  }

  prepareFormData(): FormData {
    const { name, email, message } = this.form.value;
    let fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('message', message);
    return fd;
  }

  async performMailSend(formData: FormData) {
    const response = await fetch('https://portfolio.tobias-termer.de/assets/server/send_mail.php', {
      method: 'POST',
      body: formData
    });
  
    if (!response.ok) {
      throw new Error('Netzwerkantwort war nicht ok.');
    }
  
    // Formular zurücksetzen und Erfolgsmeldung anzeigen
    this.form.reset();
    this.formSubmittedSuccessfully = true;
    setTimeout(() => this.formSubmittedSuccessfully = false, 3000); // Meldung nach 3 Sekunden ausblenden
  }

  toggleFormDisabled(disabled: boolean) {
    Object.keys(this.form.controls).forEach(key => {
      if (disabled) {
        this.form.controls[key].disable();
      } else {
        this.form.controls[key].enable();
      }
    });
  }
}