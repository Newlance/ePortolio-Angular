import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ResumeComponent } from './resume/resume.component';
import { WebsitesComponent } from './websites/websites.component';
import { GamesComponent } from './games/games.component';
import { AnimationComponent } from './animation/animation.component';
import { ContactComponent } from './contact/contact.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home Page"
    },
    {
        path: 'resume',
        component: ResumeComponent,
        title: "Resume"
    },
    {
        path: 'websites',
        component: WebsitesComponent,
        title: "Web Development"
    },
    {
        path: 'games',
        component: GamesComponent,
        title: "Games"
    },
    {
        path: 'animation',
        component: AnimationComponent,
        title: "Animatione"
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: "Contact Info"
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: "Details Page"
    }
];

export default routeConfig;