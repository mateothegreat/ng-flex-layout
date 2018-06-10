import { Component, ViewChild } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { DataTableComponent } from '../shared/lib/DataTableComponent';
import { Router } from '@angular/router';
import { SettingsRolesService } from './settings-roles.service';
import { SettingsRole } from './settings-role';

@Component({
    selector: 'app-settings-roles',
    templateUrl: './settings-roles.component.html',
    styleUrls: ['./settings-roles.component.scss']
})
export class SettingsRolesComponent {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<SettingsRole>;

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

        pageHeaderService.headerTitle = 'Roles';
        pageHeaderService.buttons = SettingsRolesComponent.PAGE_HEADER_BUTTONS;

        this.rolesService.getPageable().subscribe((pageable: any) => {

            this.datatableRef.setPage(pageable);

        });

    }

    public ngOnInit(): void {

        this.datatableRef.clicks$.subscribe((role: SettingsRole) => {

            if (role.id) {

                this.router.navigate([`/settings/roles/${role.id}`]);

            }

        });

    }


}
