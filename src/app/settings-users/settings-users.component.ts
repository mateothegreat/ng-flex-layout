import { Component, ViewChild } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { UsersService } from './UsersService';
import { DataTableComponent } from '../shared/lib/DataTableComponent';
import { User } from './User';
import { Router } from '@angular/router';

@Component({
    selector: 'app-settings-users',
    templateUrl: './settings-users.component.html',
    styleUrls: ['./settings-users.component.scss']
})
export class SettingsUsersComponent {

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<User>;

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Create User',
        icon: 'add',
        link: '/settings/users/create'

    }, {

        title: 'View Users',
        icon: 'list_alt',
        link: '/settings/users'

    }];

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private usersService: UsersService,
                       private router: Router) {

        pageHeaderService.headerTitle = 'Manage Users';
        pageHeaderService.buttons = SettingsUsersComponent.PAGE_HEADER_BUTTONS;

        this.usersService.getPageable().subscribe((pageable: any) => {

            this.datatableRef.setPage(pageable);

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
