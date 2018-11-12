import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public email;
    public password;
    public isRememberMe;

    constructor(
        private router: Router,
        private auth: AuthService
    ) {}

    onLogin() {
        this.auth.login({email: this.email, password: this.password})
        .subscribe(
            success => {
                this.router.navigate(['/forms']);
            },
            err => {
                console.log('login', err)
            }
        )
    }
}
