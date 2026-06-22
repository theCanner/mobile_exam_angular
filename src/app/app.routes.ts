import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Loading } from './pages/loading/loading';
import { Dashboard } from './pages/dashboard/dashboard';
import { Socials } from './pages/socials/socials';
import { Others } from './pages/others/others';
import { Browser } from './pages/browser/browser';

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
        path: 'browser',
        component: Browser,
      },
      {
        path: 'others',
        component: Others,
      },
    ],
  },
];
