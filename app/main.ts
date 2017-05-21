// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// for AoT compilation
/*
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNfFactory } from './app.module.ngfactory';

platformBrowser().bootstrapModule(AppModuleNgFactory);
*/