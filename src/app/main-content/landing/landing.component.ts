import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TranslateModule], // Füge TranslateModule zu den imports hinzu
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'] // Ändere styleUrl zu styleUrls
})
export class LandingComponent {
  constructor(public translate: TranslateService) { }

  get currentLanguage() {
    return this.translate.currentLang;
  }
}