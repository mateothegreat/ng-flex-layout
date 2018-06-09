import { Component, OnInit, ViewChild } from '@angular/core';
import { Organization } from '../settings-organizations/Organization';
import { DataTableComponent } from '../shared/lib/DataTableComponent';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { Router } from '@angular/router';
import { SettingsRolesService } from './settings-roles.service';

@Component({
    selector: 'app-settings-users-manage-roles',
    templateUrl: './settings-users-manage-roles.component.html',
    styleUrls: ['./settings-users-manage-roles.component.scss']
})
export class SettingsUsersManageRolesComponent implements OnInit {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<Organization>;

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Create Role',
        icon: 'add',
        link: '/settings/roles/create'

    }, {

        title: 'View Roles',
        icon: 'list_alt',
        link: '/settings/roles'

    }];

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private rolesService: SettingsRolesService,
                       private router: Router) {

        pageHeaderService.headerTitle = 'Organizations';
        pageHeaderService.buttons = SettingsUsersManageRolesComponent.PAGE_HEADER_BUTTONS;

        this.rolesService.getPageable().subscribe((pageable: any) => {

            this.datatableRef.setPage(pageable);

        });

    }

    public ngOnInit(): void {

        this.datatableRef.clicks$.subscribe((organization: Organization) => {

            if (organization.id) {

                this.router.navigate([`/settings/organizations/${organization.id}`]);

            }

        });

    }

}
