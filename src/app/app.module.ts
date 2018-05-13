import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MaterialModule} from './shared/MaterialModule';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppSidebarLeftComponent} from './app-sidebar-left/app-sidebar-left.component';
import {AppPageHeaderComponent} from './app-page-header/app-page-header.component';
import {AppPageHeaderService} from './app-page-header/app-page-header.service';
import {AppSidebarLeftService} from './app-sidebar-left/app-sidebar-left.service';
import {RouterModule} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {SettingsUsersComponent} from './settings-users/settings-users.component';
import {SettingsRolesComponent} from './settings-roles/settings-roles.component';
import {AutofocusDirective} from './shared/lib/AutofocusDirective';
import {DataTableComponent} from './shared/lib/DataTableComponent';
import {SessionService} from './shared/lib/SessionService';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgProgressModule} from 'ngx-progressbar';
import {ToastrModule} from 'ngx-toastr';
import {SettingsUsersCreateComponent} from './settings-users-create/settings-users-create.component';

@NgModule({

    declarations: [

        AutofocusDirective,
        DataTableComponent,

        AppComponent,
        AppSidebarLeftComponent,
        AppPageHeaderComponent,
        SettingsComponent,
        SettingsUsersComponent,
        SettingsRolesComponent,
        SettingsUsersCreateComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,

        NgxDatatableModule,
        NgProgressModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true
        }),

        MaterialModule,

        RouterModule.forRoot([{

            path: 'settings',
            component: SettingsComponent

        }, {

            path: 'settings/users',
            component: SettingsUsersComponent

        }, {

            path: 'settings/users/create',
            component: SettingsUsersCreateComponent

        }, {

            path: 'settings/roles',
            component: SettingsRolesComponent

        }])

    ],

    providers: [

        AppSidebarLeftService,
        AppPageHeaderService,

        SessionService

    ],

    bootstrap: [AppComponent]

})
export class AppModule {
}
