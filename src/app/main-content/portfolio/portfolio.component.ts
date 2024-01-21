import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolio: any = [
    {
      projectname: 'Join',
      languages: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLive: 'https://tobias-termer.developerakademie.net/join/index.html',
      linkGit: 'https://github.com/tobiastermer/join',
      picture: 'join.png',
    },
    {
      projectname: 'El Pollo Loco',
      languages: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsabottles to fight against the endboss chicken.',
      linkLive: 'https://tobias-termer.developerakademie.net/elpollolocco/index.html',
      linkGit: 'https://github.com/tobiastermer/elpollolocco',
      picture: 'elpolloloco.png',
    },
    {
      projectname: 'Pokedex',
      languages: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      linkLive: 'https://tobias-termer.developerakademie.net/pokedex/index.html',
      linkGit: 'https://github.com/tobiastermer/pokedex',
      picture: 'pokedex.png',
    },
    {
      projectname: 'Simple CRM',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      linkLive: '#',
      linkGit: '#',
      picture: 'simplecrm.png',
    },
  ]

}
