import { Component, OnInit, ViewChild } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { Pageable } from '../shared/lib/Pageable';
import { Router } from '@angular/router';
import { MonitoringService } from './monitoring.service';
import { MonitoringDevice } from './monitoring-device';
import { DataTableComponent } from '../shared/lib/DataTableComponent';

@Component({
    selector: 'app-monitoring',
    templateUrl: './monitoring.component.html',
    styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {

    public static readonly PAGE_HEADER_TITLE: string = 'Monitoring';

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Connect Device',
        icon: 'add',
        link: '/monitoring/connect'

    }, {

        title: 'View Devices',
        icon: 'list_alt',
        link: '/monitoring'

    }];

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<MonitoringDevice>;

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private router: Router,
                       private monitoringService: MonitoringService) {

        pageHeaderService.headerTitle = MonitoringComponent.PAGE_HEADER_TITLE;
        pageHeaderService.buttons = MonitoringComponent.PAGE_HEADER_BUTTONS;

        this.monitoringService.getPageable().subscribe((pageable: Pageable<MonitoringDevice>) => {

            this.datatableRef.setPage(pageable);

        })

    }

    public ngOnInit(): void {

        this.datatableRef.clicks$.subscribe((monitoringDevice: MonitoringDevice) => {

            if (monitoringDevice.id) {

                this.router.navigate([`/monitoring/${monitoringDevice.id}`]);

            }

        });

    }

}
