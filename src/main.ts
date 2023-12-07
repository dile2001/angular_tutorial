import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


const platform = platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
