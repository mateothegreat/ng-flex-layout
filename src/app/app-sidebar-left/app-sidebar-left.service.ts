import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppSidebarLeftService {

    public headerIcon: string;
    public headerTitle: string;

    public menu: any[] = [

        {

            title: 'User Management',
            icon: 'account_box',
            link: '/settings/users'

        }, {

            title: 'Roles & Permissions',
            icon: 'vpn_key',
            link: '/settings/roles'

        }

    ];

    public constructor() {

    }

}
