import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() projectname?: string;
  @Input() languages?: string;
  @Input() description?: string;
  @Input() linkLive?: string;
  @Input() linkGit?: string;
  @Input() picture?: string;
  @Input() index?: number;
}
