"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main entry point
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
// for AoT compilation
/*
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNfFactory } from './app.module.ngfactory';

platformBrowser().bootstrapModule(AppModuleNgFactory);
*/ 
//# sourceMappingURL=main.js.map