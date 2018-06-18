import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { RouterModule } from '@angular/router';
import { CamerasStatusComponent } from '../cameras-status/cameras-status.component';
import { CamerasService } from './cameras.service';
import { CamerasManageSettingsComponent } from '../cameras-manage-settings/cameras-manage-settings.component';
import { CamerasManageOverviewComponent } from '../cameras-manage-overview/cameras-manage-overview.component';
import { CamerasManageLiveFeedComponent } from '../cameras-manage-live-feed/cameras-manage-live-feed.component';
import { CamerasManageComponent } from '../cameras-manage/cameras-manage.component';
import { CamerasManagePlaybackComponent } from '../cameras-manage-playback/cameras-manage-playback.component';
import { CamerasManageSharingComponent } from '../cameras-manage-sharing/cameras-manage-sharing.component';
import { CamerasCreateComponent } from '../cameras-create/cameras-create.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/MaterialModule';
import { AuthGuard } from '../shared/lib/AuthGuard';
import { APIClient } from '../shared/lib/APIClient';

@NgModule({

    imports: [

        CommonModule,
        SharedModule,
        MaterialModule,

        RouterModule.forChild([{

            path: 'cameras',
            component: CamerasComponent,
            canActivate: [AuthGuard]

        }])

    ],

    declarations: [

        CamerasComponent,
        CamerasStatusComponent,
        CamerasManageOverviewComponent,
        CamerasManageSettingsComponent,
        CamerasManageLiveFeedComponent,
        CamerasManageComponent,
        CamerasManageSharingComponent,
        CamerasManagePlaybackComponent,
        CamerasCreateComponent,
    ],

    exports: [],

    providers: [

        AuthGuard,
        APIClient,
        CamerasService

    ]

})
export class CamerasModule {
}
