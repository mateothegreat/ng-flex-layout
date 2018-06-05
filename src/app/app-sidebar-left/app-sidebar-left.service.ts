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

                title: 'Manage Cameras',
                link: '/cameras'

            }, {

                title: 'Status & Health',
                link: '/cameras/status'

            }]

        }, {

            title: 'Media Library',
            icon: 'ondemand_video',

            children: [{

                title: 'Manage Media',
                link: '/media'

            }, {

                title: 'Media Export',
                link: '/media/export'

            }]

        }, {

            title: 'Settings',
            icon: 'settings',

            children: [{

                title: 'Manage Organizations',
                link: '/settings/organizations'

            }, {

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
