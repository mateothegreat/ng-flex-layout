import { Component, OnInit } from '@angular/core';
import { SettingsUsersManageService } from '../settings-users-manage/settings-users-manage-service';

@Component({
    selector: 'app-settings-users-manage-overview',
    templateUrl: './settings-users-manage-overview.component.html',
    styleUrls: ['./settings-users-manage-overview.component.scss']
})
export class SettingsUsersManageOverviewComponent implements OnInit {


    public constructor(public usersManageService: SettingsUsersManageService) {


    }

    ngOnInit() {
    }

}
