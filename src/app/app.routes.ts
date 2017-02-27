import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { CurrencyConverter } from './currency-converter';
import { SignupFormComponent } from './registration';
import { RegisterComponent } from './registration/register.component';
import { NoContentComponent } from './no-content';
import { QuotesComponent } from './quotes';
import { BookmarksComponent } from './bookmarks';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'currency-converter', component: CurrencyConverter },
  { path: 'signup', component: SignupFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quotes', component: QuotesComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
