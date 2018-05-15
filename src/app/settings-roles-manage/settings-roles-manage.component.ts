import {Component} from '@angular/core';
import {AppPageHeaderService} from '../app-page-header/app-page-header.service';
import {SettingsRolesComponent} from '../settings-roles/settings-roles.component';

@Component({
    selector: 'app-settings-roles-manage',
    templateUrl: './settings-roles-manage.component.html',
    styleUrls: ['./settings-roles-manage.component.scss']
})
export class SettingsRolesManageComponent {

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = 'Manage Role';
        pageHeaderService.buttons = SettingsRolesComponent.PAGE_HEADER_BUTTONS;

    }

}
