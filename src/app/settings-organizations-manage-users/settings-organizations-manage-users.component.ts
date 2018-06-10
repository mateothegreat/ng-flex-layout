import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { OrganizationsService } from '../settings-organizations/OrganizationsService';
import { DataTableComponent } from '../shared/lib/DataTableComponent';
import { User } from '../settings-users/User';
import { Organization } from '../settings-organizations/Organization';
import { SettingsOrganizationManageService } from '../settings-organizations-manage/SettingsOrganizationManageService';
import { Router } from '@angular/router';

@Component({

    selector: 'app-settings-organizations-manage-users',
    templateUrl: './settings-organizations-manage-users.component.html',
    styleUrls: ['./settings-organizations-manage-users.component.scss']

})
export class SettingsOrganizationsManageUsersComponent implements OnInit {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<User>;

    @Input() public organization: Organization = new Organization();

    @Input() public organizationId: Number;

    public constructor(public organizationsManageService: SettingsOrganizationManageService,
                       private organizationsService: OrganizationsService,
                       private router: Router) {

        this.organizationsManageService.organization$.subscribe((organization: Organization) => {

            if (organization.id) {

                this.organizationsService.getPageableUsers(organization.id).subscribe((pageable: any) => {

                    this.datatableRef.setPage(pageable);

                    console.log(pageable);

                });

            }

        });

    }

    public ngOnInit(): void {

        this.datatableRef.clicks$.subscribe((user: User) => {

            if (user.id) {

                this.router.navigate([`/settings/users/${user.id}`]);

            }

        });

    }

}
