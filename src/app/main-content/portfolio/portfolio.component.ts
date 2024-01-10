import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolio: any = [
    {
      projectname: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLive: 'https://tobias-termer.developerakademie.net/join/index.html',
      linkGit: 'https://github.com/tobiastermer/join',
      picture: 'join.png',
    },
    {
      projectname: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLive: 'https://tobias-termer.developerakademie.net/join/index.html',
      linkGit: 'https://github.com/tobiastermer/join',
      picture: 'join.png',
    },
    {
      projectname: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLive: 'https://tobias-termer.developerakademie.net/join/index.html',
      linkGit: 'https://github.com/tobiastermer/join',
      picture: 'join.png',
    },
    {
      projectname: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      linkLive: 'https://tobias-termer.developerakademie.net/join/index.html',
      linkGit: 'https://github.com/tobiastermer/join',
      picture: 'join.png',
    },
  ]

}
