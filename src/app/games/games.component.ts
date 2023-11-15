import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtifactComponent } from '../artifact/artifact.component';
import { ArtifactService } from '../artifact.service';
import { Artifacts } from '../artifacts';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule,ArtifactComponent],
  template: `
  <app-artifact *ngFor="let artifacts of artifactsList" [artifacts]
  ="artifacts"></app-artifact>
  `,
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  artifactsList: Artifacts[] = [];
  artifactService: ArtifactService = inject(ArtifactService);

  constructor(){
    this.artifactsList = this.artifactService.getAllGames();
  }


  
}
