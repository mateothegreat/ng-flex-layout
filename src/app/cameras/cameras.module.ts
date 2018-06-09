import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { RouterModule } from '@angular/router';
import { CamerasStatusComponent } from '../cameras-status/cameras-status.component';
import { CamerasService } from './cameras.service';

@NgModule({

    imports: [

        CommonModule,

        RouterModule.forChild([{

            path: 'cameras',
            component: CamerasComponent

        }])

    ],

    declarations: [

        CamerasComponent,
        CamerasStatusComponent,


    ],

    exports: [],

    providers: [

        CamerasService

    ]

})
export class CamerasModule {
}
