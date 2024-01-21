import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';
import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http'; // Importiere HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, RouterModule, HeaderMobileComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('de'); // Setze die Standard-Sprache
    translate.use('de'); // Aktiviere die Standard-Sprache
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      setTimeout(() => {
        AOS.refresh();
      }, 500); // Warten Sie eine kurze Zeit, bevor Sie AOS.refresh aufrufen
    }
  }

}
