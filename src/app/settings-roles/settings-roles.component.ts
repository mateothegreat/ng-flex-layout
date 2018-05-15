import {Component} from '@angular/core';
import {AppPageHeaderService} from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-settings-roles',
    templateUrl: './settings-roles.component.html',
    styleUrls: ['./settings-roles.component.scss']
})
export class SettingsRolesComponent {

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Create Role',
        icon: 'add',
        link: '/settings/roles/create'

    }, {

        title: 'View Roles',
        link: '/settings/roles'

    }];

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = 'Manage Roles';
        pageHeaderService.buttons = SettingsRolesComponent.PAGE_HEADER_BUTTONS;

    }

}
