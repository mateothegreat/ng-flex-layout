import {Component, ViewChild} from '@angular/core';
import {DataTableComponent} from '../shared/lib/DataTableComponent';
import {User} from '../settings-users/User';
import {AppPageHeaderService} from '../app-page-header/app-page-header.service';
import {OrganizationsService} from './OrganizationsService';

@Component({
    selector: 'app-settings-organizations',
    templateUrl: './settings-organizations.component.html',
    styleUrls: ['./settings-organizations.component.scss']
})
export class SettingsOrganizationsComponent {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<User>;

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Create Organization',
        icon: 'add',
        link: '/settings/organizations/create'

    }, {

        title: 'View Organizations',
        icon: 'list_alt',
        link: '/settings/organizations'

    }];

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private organizationsService: OrganizationsService) {

        pageHeaderService.headerTitle = 'Organizations';
        pageHeaderService.buttons = SettingsOrganizationsComponent.PAGE_HEADER_BUTTONS;

        this.organizationsService.getPageable().subscribe((pageable: any) => {

            this.datatableRef.setPage(pageable);

        });

    }

}
