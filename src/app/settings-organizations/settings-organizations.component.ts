import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableComponent } from '../shared/lib/DataTableComponent';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { OrganizationsService } from './OrganizationsService';
import { Organization } from './Organization';
import { Router } from '@angular/router';

@Component({
    selector: 'app-settings-organizations',
    templateUrl: './settings-organizations.component.html',
    styleUrls: ['./settings-organizations.component.scss']
})
export class SettingsOrganizationsComponent implements OnInit {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<Organization>;

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
                       private organizationsService: OrganizationsService,
                       private router: Router) {

        pageHeaderService.headerTitle = 'Organizations';
        pageHeaderService.buttons = SettingsOrganizationsComponent.PAGE_HEADER_BUTTONS;

        this.organizationsService.getPageable().subscribe((pageable: any) => {

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
