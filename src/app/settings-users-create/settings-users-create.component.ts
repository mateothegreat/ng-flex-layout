import {Component} from '@angular/core';
import {Statuses} from '../shared/lib/Statuses';
import {User} from '../settings-users/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppPageHeaderService} from '../app-page-header/app-page-header.service';
import {SettingsUsersComponent} from '../settings-users/settings-users.component';

@Component({
    selector: 'settings-users-create',
    templateUrl: './settings-users-create.component.html',
    styleUrls: ['./settings-users-create.component.scss']
})
export class SettingsUsersCreateComponent {

    public formGroup: FormGroup = new FormGroup({

        email: new FormControl(),
        firstname: new FormControl(),
        lastname: new FormControl(),
        username: new FormControl(Validators.required),
        password: new FormControl(Validators.required),
        status: new FormControl(Statuses.STATUS_ACTIVE, Validators.required)

    });

    public user: User = new User();

    public statuses: string[] = Statuses.STATUSES;

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = 'Create User';
        pageHeaderService.buttons = SettingsUsersComponent.PAGE_HEADER_BUTTONS;

    }

    public onButtonSaveClick(): void {

        console.log('yay');
    }

}
