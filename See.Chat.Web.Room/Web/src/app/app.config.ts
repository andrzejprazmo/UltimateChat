import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { firstValueFrom, tap } from 'rxjs';
import { APPLICATION_CONFIG, GlobalConfiguration } from '@shared/types/shared.types';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: APPLICATION_CONFIG,
      useValue: {
        hubUrl: ''
      }
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [HttpClient, APPLICATION_CONFIG],
    },
  ]

};

export function initializeApp(http: HttpClient, appConfig: GlobalConfiguration) {
  return (): Promise<any> =>
    firstValueFrom(
      http
        .get<GlobalConfiguration>('/api/config')
        .pipe(tap(config => {
          appConfig.hubUrl = config.hubUrl
        }))
    );
}