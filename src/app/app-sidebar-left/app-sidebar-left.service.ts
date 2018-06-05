import {Injectable} from '@angular/core';

@Injectable()
export class AppSidebarLeftService {

    public headerIcon: string;
    public headerTitle: string;

    public panelOpenState: boolean = false;

    public menu: any[] = [

        {

            title: 'Cameras',
            icon: 'videocam',

            children: [{

                title: 'Manage Users',
                link: '/settings/users'

            }, {

                title: 'Roles & Permissions',
                link: '/settings/roles'

            }]

        }, {

            title: 'Media Library',
            icon: 'ondemand_video',

            children: [{

                title: 'Manage Users',
                link: '/settings/users'

            }, {

                title: 'Roles & Permissions',
                link: '/settings/roles'

            }]

        }, {

            title: 'User Management',
            icon: 'account_box',

            children: [{

                title: 'Manage Users',
                link: '/settings/users'

            }, {

                title: 'Roles & Permissions',
                link: '/settings/roles'

            }]

        },

    ];

    public constructor() {

    }

}
