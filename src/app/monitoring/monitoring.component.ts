import { Component, OnInit } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';

@Component({
    selector: 'app-monitoring',
    templateUrl: './monitoring.component.html',
    styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        //     title: 'Create User',
        //     icon: 'add',
        //     link: '/settings/users/create'
        //
        // }, {
        //
        //     title: 'View Users',
        //     icon: 'list_alt',
        //     link: '/settings/users'

    }];

    public constructor(private pageHeaderService: AppPageHeaderService,) {

        pageHeaderService.headerTitle = 'Monitoring';
        pageHeaderService.buttons = MonitoringComponent.PAGE_HEADER_BUTTONS;

    }

    public ngOnInit() {

    }

}
