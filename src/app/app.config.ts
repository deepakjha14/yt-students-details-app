import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from "./auth/auth.service";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideExperimentalZonelessChangeDetection(),
        AuthService
    ]
};
