import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { HomePageModule } from './app/private/home-page/home-page.module';

platformBrowserDynamic().bootstrapModule(HomePageModule)
  .catch(err => console.error(err));
