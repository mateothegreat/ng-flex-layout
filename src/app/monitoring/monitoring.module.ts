import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringComponent } from './monitoring.component';
import { RouterModule } from '@angular/router';

@NgModule({

    imports: [

        CommonModule,

        RouterModule.forChild([{

            path: 'monitoring',
            component: MonitoringComponent

        }])

    ],
    declarations: [

        MonitoringComponent

    ]

})
export class MonitoringModule {
}
