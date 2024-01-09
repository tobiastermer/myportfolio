import { Component } from '@angular/core';
import { SkillComponent } from './skill/skill.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material Design',
  ]
}
