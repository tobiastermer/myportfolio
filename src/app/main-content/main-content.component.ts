import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
