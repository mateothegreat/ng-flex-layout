import {Component} from '@angular/core';
import {AppPageHeaderService} from '../app-page-header/app-page-header.service';
import {SettingsRolesComponent} from '../settings-roles/settings-roles.component';

@Component({
    selector: 'app-settings-roles-create',
    templateUrl: './settings-roles-create.component.html',
    styleUrls: ['./settings-roles-create.component.scss']
})
export class SettingsRolesCreateComponent {

    public constructor(private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = 'Create Role';
        pageHeaderService.buttons = SettingsRolesComponent.PAGE_HEADER_BUTTONS;

    }

}
