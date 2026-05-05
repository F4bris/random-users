import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { TranslateService } from '@ngx-translate/core';

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    const translate = appRef.injector.get(TranslateService);
    translate.setDefaultLang('en'); // ← fallback si falta una clave
    translate.use('en'); // ← idioma activo al arrancar
  })
  .catch((err) => console.error(err));
