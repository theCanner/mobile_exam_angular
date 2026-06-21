import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Loading } from './pages/loading/loading';
import { Dashboard } from './pages/dashboard/dashboard';
import { Socials } from './pages/socials/socials';
import { Others } from './pages/others/others';

export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: Login },
 { path: 'loading', component: Loading },
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'socials',
        component: Socials,
      },
      {
        path: 'others',
        component: Others,
      },
    ],
  },
];
