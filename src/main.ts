/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HomePageModule } from './homepage/homepage.module';


platformBrowserDynamic().bootstrapModule(HomePageModule)
  .catch(err => console.error(err));
