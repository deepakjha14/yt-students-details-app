import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: any = 0;
    reirectUrl: string|null = null;

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(2000),
            tap(() => this.isLoggedIn = true)
        );
    }

    logOut(): void {
        this.isLoggedIn = false;
    }
}