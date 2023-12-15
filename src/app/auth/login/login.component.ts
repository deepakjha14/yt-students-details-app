import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'students-details-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
	loginFormModel: any = {
		username: "",
		password: ""
	};

	constructor(
		public authService: AuthService,
		public router: Router
	) {}

	login(form: any) {
		console.log(form);
		
		this.authService.login().subscribe(
			()=> {
				if (this.authService.isLoggedIn) {
					// Usually you would use the redirect URL from the auth service.
					// However to keep the example simple, we will always redirect to `/admin`.
					const redirectUrl = '/dashboard';
	
					// Set our navigation extras object
					// that passes on our global query params and fragment
					const navigationExtras: NavigationExtras = {
						queryParamsHandling: 'preserve',
						preserveFragment: true
					};
	
					// Redirect the user
					this.router.navigate([redirectUrl], navigationExtras);
				}
			}
		);
	}
	
	logout() {
		this.authService.logOut();
	}
}
