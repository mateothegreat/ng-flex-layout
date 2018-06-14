import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsUsersManageService } from './settings-users-manage-service';
import { SettingsUsersComponent } from '../settings-users/settings-users.component';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';

@Component({

    selector: 'app-settings-users-manage',
    templateUrl: './settings-users-manage.component.html',
    styleUrls: ['./settings-users-manage.component.scss']

})
export class SettingsUsersManageComponent implements OnInit {

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private router: Router,
                       private route: ActivatedRoute,
                       public usersManageService: SettingsUsersManageService) {

        pageHeaderService.headerTitle = 'Manage Users';
        pageHeaderService.buttons = SettingsUsersComponent.PAGE_HEADER_BUTTONS;

        this.route.params.subscribe((params) => {

            if (params.id) {

                this.usersManageService.getUserById(params.id);

            }

        });

    }

    public ngOnInit() {

    }

}
