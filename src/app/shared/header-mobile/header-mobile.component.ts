import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {
  menuStyle = 'd-none hidden';

  toggleMenu() {
    const htmlElement = document.documentElement;

    if (this.menuStyle == 'visible' || this.menuStyle == 'd-flex visible') {
      this.menuStyle = 'hidden';
      htmlElement.style.overflow = 'auto'; // Setzt overflow auf auto, wenn das Menü geschlossen wird
      htmlElement.style.overflowX = 'hidden'; // Setzt overflow auf auto, wenn das Menü geschlossen wird
      setTimeout(() => {
        this.menuStyle = 'hidden d-none';
      }, 500);
    } else {
      this.menuStyle = 'd-flex';
      htmlElement.style.overflow = 'hidden'; // Setzt overflow auf hidden, wenn das Menü geöffnet wird
      setTimeout(() => {
        this.menuStyle = 'visible';
      }, 5);
    }
  }

  clickLink() {
    this.menuStyle = 'strong-hidden';
    document.documentElement.style.overflow = 'auto'; // Setzt overflow auf auto, wenn ein Link geklickt wird
  }
}
