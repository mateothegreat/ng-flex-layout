import { Component } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-settings-users',
    templateUrl: './settings-users.component.html',
    styleUrls: ['./settings-users.component.scss']
})
export class SettingsUsersComponent {

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Create User',
        icon: 'add',
        link: '/settings/users/create'

    }, {

        title: 'View Users',
        icon: 'list_alt',
        link: '/settings/users'

    }];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = 'Manage Users';
        pageHeaderService.buttons = SettingsUsersComponent.PAGE_HEADER_BUTTONS;

    }

}
