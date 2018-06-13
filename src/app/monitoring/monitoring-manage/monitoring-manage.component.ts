import { Component } from '@angular/core';
import { MonitoringManageService } from './monitoring-manage.service';
import { ToastrService } from 'ngx-toastr';
import { AppPageHeaderService } from '../../app-page-header/app-page-header.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MonitoringComponent } from '../monitoring.component';

@Component({
    selector: 'app-monitoring-manage',
    templateUrl: './monitoring-manage.component.html',
    styleUrls: ['./monitoring-manage.component.scss']
})
export class MonitoringManageComponent {

    public constructor(public monitoringManageService: MonitoringManageService,
                       private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,
                       private pageHeaderService: AppPageHeaderService) {

        pageHeaderService.headerTitle = MonitoringComponent.PAGE_HEADER_TITLE;
        pageHeaderService.buttons = MonitoringComponent.PAGE_HEADER_BUTTONS;

        this.route.params.subscribe((params) => {

            if (params.id) {

                this.monitoringManageService.getMonitoringDevice(params.id);

            }

        });

    }

}
