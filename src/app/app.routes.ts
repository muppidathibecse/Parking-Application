import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Home } from './components/home/home';
import { Locations } from './components/locations/locations';
import { Bookings } from './components/bookings/bookings';
import { History } from './components/history/history';

export const routes: Routes = [
  {
    path: 'about',
    component: About,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'locations',
    component: Locations,
  },
  {
    path: 'bookings',
    component: Bookings,
  },
  {
    path: 'history',
    component: History,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
