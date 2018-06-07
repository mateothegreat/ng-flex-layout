import { Component, Input, OnInit } from '@angular/core';
import { Organization } from '../settings-organizations/Organization';
import { SettingsOrganizationManageService } from '../settings-organizations-manage/SettingsOrganizationManageService';

@Component({

    selector: 'app-settings-organizations-manage-overview',
    templateUrl: './settings-organizations-manage-overview.component.html',
    styleUrls: ['./settings-organizations-manage-overview.component.scss']

})
export class SettingsOrganizationsManageOverviewComponent implements OnInit {

    @Input() public organization: Organization = new Organization();

    public constructor(public organizationsManageService: SettingsOrganizationManageService) {

        organizationsManageService.organization$.subscribe(org => this.organization = org)

    }

    public ngOnInit() {


    }

}
