import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artifacts } from '../artifacts';
import { YouTubePlayerModule } from '@angular/youtube-player';


@Component({
  selector: 'app-artifact',
  standalone: true,
  imports: [CommonModule,YouTubePlayerModule],
  template: `
  <script src="https://www.youtube.com/iframe_api"></script>
  <ng-container *ngIf="artifacts">
  <section class="reflection" [ngClass]="{'rightAlign': !artifacts.alignLeft,'leftAlign': artifacts.alignLeft }">
      <img class="listing-photo" [ngClass]="{'hidden': artifacts.isVideo}" [src]="artifacts.content" alt="Exterior photo of {{artifacts.name}}" width="500px">
      <div [ngClass]="{'hidden': !artifacts.isVideo}">
      <youtube-player [videoId]="artifacts.content"> </youtube-player>
      </div>
      <h3>{{artifacts.name}}</h3>
      <div [innerHTML]="artifacts.description"></div>
      <div class="clear"></div>      
    </section>
    </ng-container>
  `,
  styleUrls: ['./artifact.component.css']
})
export class ArtifactComponent {  
  @Input() artifacts!:Artifacts;

  apiLoaded = false;

  ngOnInit(){
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
