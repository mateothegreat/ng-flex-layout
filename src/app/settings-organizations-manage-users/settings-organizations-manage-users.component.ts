import { Component, Input, ViewChild } from '@angular/core';
import { OrganizationsService } from '../settings-organizations/OrganizationsService';
import { DataTableComponent } from '../shared/lib/DataTableComponent';
import { User } from '../settings-users/User';
import { Organization } from '../settings-organizations/Organization';
import { SettingsOrganizationManageService } from '../settings-organizations-manage/SettingsOrganizationManageService';

@Component({

    selector: 'app-settings-organizations-manage-users',
    templateUrl: './settings-organizations-manage-users.component.html',
    styleUrls: ['./settings-organizations-manage-users.component.scss']

})
export class SettingsOrganizationsManageUsersComponent {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<User>;

    @Input() public organization: Organization = new Organization();

    @Input() public organizationId: Number;

    public constructor(public organizationsManageService: SettingsOrganizationManageService,
                       private organizationsService: OrganizationsService) {

        this.organizationsManageService.organization$.subscribe((organization: Organization) => {

            if (organization.id) {

                this.organizationsService.getPageableUsers(organization.id).subscribe((pageable: any) => {

                    this.datatableRef.setPage(pageable);

                    console.log(pageable);

                });

            }

        });

    }

}
