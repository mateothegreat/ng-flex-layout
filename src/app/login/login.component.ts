import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../shared/lib/SessionService';
import { Router } from '@angular/router';
import { User } from '../settings-users/User';

@Component({

    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

    public formGroup: FormGroup = new FormGroup({

        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)

    });

    public constructor(private sessionService: SessionService,
                       private router: Router) {

    }

    public ngOnInit(): void {


    }

    public onLoginButtonClick(): void {

        const user: User = new User();

        user.username = 'johndoe';

        SessionService.storageSet(user);

        location.href = '/';

    }

}
