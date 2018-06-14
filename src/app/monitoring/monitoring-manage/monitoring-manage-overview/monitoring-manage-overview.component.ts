import { Component } from '@angular/core';
import { MonitoringManageService } from '../monitoring-manage.service';

@Component({
    selector: 'app-monitoring-manage-overview',
    templateUrl: './monitoring-manage-overview.component.html',
    styleUrls: ['./monitoring-manage-overview.component.scss']
})
export class MonitoringManageOverviewComponent {

    public constructor(public monitoringManageService: MonitoringManageService) {


    }


}
