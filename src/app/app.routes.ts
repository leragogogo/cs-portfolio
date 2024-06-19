import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { CoursesComponent } from './courses/courses.component';
import { PlacesAppComponent } from './places-app/places-app.component';
import { TeachEasyComponent } from './teach-easy/teach-easy.component';
import { MindbreezeAppComponent } from './mindbreeze-app/mindbreeze-app.component';

const routeConfig: Routes = [
    {
        path: '',
        component: AboutComponent,
        title: 'About page',
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About page',
    },
    {
        path: 'portfolio',
        component: PortfolioComponent,
        title: 'Portfolio page',
    },
    {
        path: 'resume',
        component: ResumeComponent,
        title: 'Resume page',
    },
    {
        path:'portfolio/courses',
        component: CoursesComponent,
        title: 'Courses',
    },
    {
        path:'portfolio/places',
        component: PlacesAppComponent,
        title: 'Places',
    },
    {
        path:'portfolio/teacheasy',
        component: TeachEasyComponent,
        title: 'TeachEasy',
    },
    {
        path:'portfolio/mindbreeze',
        component: MindbreezeAppComponent,
        title: 'Courses',
    }
];
export default routeConfig;