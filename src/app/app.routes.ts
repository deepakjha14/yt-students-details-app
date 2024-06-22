import { Routes } from '@angular/router';

import { LoginComponent } from "./auth/login/login.component";
import { authGuardGuard } from "./auth/auth-guard.guard";
import { NotFoundComponent } from './dashboard/not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
        // canMatch: [authGuardGuard]
    },
    {
        path: "**",
        redirectTo: ({url}) => {
            console.log(url);
            if (url[0].path === "dashboard") {
                return "dashboard";
            }

            return 'notfound';
        }
    },
    {
        path: 'notfound',
        component: NotFoundComponent
    }
];
