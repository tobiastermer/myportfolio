import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

  menuStyle = 'hidden';

  toggleMenu() {
    if(this.menuStyle == 'visible') {
      this.menuStyle = 'hidden';
    } else {
      this.menuStyle = 'visible';
    }
  }

  clickLink() {
    this.menuStyle = 'strong-hidden';
  }

}
