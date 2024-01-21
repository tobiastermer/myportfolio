import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TranslateModule], // Füge TranslateModule zu den imports hinzu
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'] // Ändere styleUrl zu styleUrls
})
export class LandingComponent {
  // Dein Komponenten-Code
}
