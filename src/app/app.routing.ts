import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(appRoutes);