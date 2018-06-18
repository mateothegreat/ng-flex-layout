import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringComponent } from './monitoring.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MonitoringService } from './monitoring.service';
import { MonitoringConnectComponent } from './monitoring-connect/monitoring-connect.component';
import { MonitoringManageComponent } from './monitoring-manage/monitoring-manage.component';
import { MonitoringManageHistoryComponent } from './monitoring-manage/monitoring-manage-history/monitoring-manage-history.component';
import { MonitoringManageOverviewComponent } from './monitoring-manage/monitoring-manage-overview/monitoring-manage-overview.component';
import { MonitoringManageSettingsComponent } from './monitoring-manage/monitoring-manage-settings/monitoring-manage-settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonitoringManageService } from './monitoring-manage/monitoring-manage.service';
import { AuthGuard } from '../shared/lib/AuthGuard';

@NgModule({

    imports: [

        CommonModule,
        SharedModule,
        ReactiveFormsModule,

        RouterModule.forChild([{

            path: 'monitoring',
            component: MonitoringComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'monitoring/connect',
            component: MonitoringConnectComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'monitoring/:id',
            component: MonitoringManageComponent,
            canActivate: [AuthGuard]

        }])

    ],
    declarations: [

        MonitoringComponent,
        MonitoringConnectComponent,
        MonitoringManageComponent,
        MonitoringManageHistoryComponent,
        MonitoringManageOverviewComponent,
        MonitoringManageSettingsComponent

    ],

    providers: [

        MonitoringService,
        MonitoringManageService

    ]

})
export class MonitoringModule {
}
