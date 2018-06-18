import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSidebarLeftComponent } from './app-sidebar-left/app-sidebar-left.component';
import { AppPageHeaderComponent } from './app-page-header/app-page-header.component';
import { AppPageHeaderService } from './app-page-header/app-page-header.service';
import { AppSidebarLeftService } from './app-sidebar-left/app-sidebar-left.service';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SettingsUsersComponent } from './settings-users/settings-users.component';
import { SettingsRolesComponent } from './settings-roles/settings-roles.component';
import { AutofocusDirective } from './shared/lib/AutofocusDirective';
import { SessionService } from './shared/lib/SessionService';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgProgressInterceptor, NgProgressModule } from 'ngx-progressbar';
import { ToastrModule } from 'ngx-toastr';
import { SettingsUsersCreateComponent } from './settings-users-create/settings-users-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsRolesCreateComponent } from './settings-roles-create/settings-roles-create.component';
import { SettingsRolesManageComponent } from './settings-roles-manage/settings-roles-manage.component';
import { SettingsUsersManageComponent } from './settings-users-manage/settings-users-manage.component';
import { HomeComponent } from './home/home.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { MaterialModule } from './shared/MaterialModule';
import { AppCardComponent } from './app-card/app-card.component';
import { UsersService } from './settings-users/UsersService';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SettingsOrganizationsComponent } from './settings-organizations/settings-organizations.component';
import { BrowserModule } from '@angular/platform-browser';
import { SettingsOrganizationsManageComponent } from './settings-organizations-manage/settings-organizations-manage.component';
import { SettingsOrganizationsCreateComponent } from './settings-organizations-create/settings-organizations-create.component';
import { OrganizationsService } from './settings-organizations/OrganizationsService';
import { MonitoringModule } from './monitoring/monitoring.module';
import { SharedModule } from './shared/shared.module';
import { SettingsOrganizationsManageOverviewComponent } from './settings-organizations-manage-overview/settings-organizations-manage-overview.component';
import { SettingsOrganizationsManageUsersComponent } from './settings-organizations-manage-users/settings-organizations-manage-users.component';
import { SettingsOrganizationManageService } from './settings-organizations-manage/SettingsOrganizationManageService';
import { SettingsUsersManageOverviewComponent } from './settings-users-manage-overview/settings-users-manage-overview.component';
import { SettingsUsersManageRolesComponent } from './settings-users-manage-roles/settings-users-manage-roles.component';
import { SettingsUsersManageService, } from './settings-users-manage/settings-users-manage-service';
import { MediaModule } from './media/media.module';
import { CamerasComponent } from './cameras/cameras.component';
import { CamerasService } from './cameras/cameras.service';
import { CamerasManageComponent } from './cameras-manage/cameras-manage.component';
import { SettingsRolesService } from './settings-roles/settings-roles.service';
import { SettingsRolesManageOverviewComponent } from './settings-roles-manage-overview/settings-roles-manage-overview.component';
import { SettingsRolesManageUsersComponent } from './settings-roles-manage-users/settings-roles-manage-users.component';
import { SettingsRolesManageService } from './settings-roles-manage/settings-roles-manage.service';
import { CamerasManageService } from './cameras-manage/cameras-manage.service';
import { CamerasCreateComponent } from './cameras-create/cameras-create.component';
import { CamerasModule } from './cameras/cameras.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/lib/AuthGuard';

@NgModule({

    declarations: [

        AutofocusDirective,

        AppComponent,
        AppSidebarLeftComponent,
        AppPageHeaderComponent,
        SettingsComponent,
        SettingsUsersComponent,
        SettingsRolesComponent,
        SettingsUsersCreateComponent,
        SettingsRolesCreateComponent,
        SettingsRolesManageComponent,
        SettingsUsersManageComponent,
        HomeComponent,
        HomeDashboardComponent,
        AppCardComponent,
        SettingsOrganizationsComponent,
        SettingsOrganizationsManageComponent,
        SettingsOrganizationsCreateComponent,
        SettingsOrganizationsManageOverviewComponent,
        SettingsOrganizationsManageUsersComponent,
        SettingsUsersManageOverviewComponent,
        SettingsUsersManageRolesComponent,

        SettingsRolesManageOverviewComponent,
        SettingsRolesManageUsersComponent,
        LoginComponent,


    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,

        SharedModule,
        MonitoringModule,
        MediaModule,
        CamerasModule,
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

        RouterModule.forRoot([{

            path: 'home',
            component: HomeComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'login',
            component: LoginComponent,

        }, {

            path: 'cameras',
            component: CamerasComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'cameras/connect',
            component: CamerasCreateComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'cameras/:id',
            component: CamerasManageComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings',
            component: SettingsComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/organizations',
            component: SettingsOrganizationsComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/organizations/create',
            component: SettingsOrganizationsCreateComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/organizations/:id',
            component: SettingsOrganizationsManageComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/users',
            component: SettingsUsersComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/users/create',
            component: SettingsUsersCreateComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/users/:id',
            component: SettingsUsersManageComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/roles',
            component: SettingsRolesComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/roles/create',
            component: SettingsRolesCreateComponent,
            canActivate: [AuthGuard]

        }, {

            path: 'settings/roles/:id',
            component: SettingsRolesManageComponent,
            canActivate: [AuthGuard]

        }, {

            path: '',
            pathMatch: 'full',
            redirectTo: 'home'

        }])

    ],

    providers: [

        {
            provide: HTTP_INTERCEPTORS,
            useClass: NgProgressInterceptor,
            multi: true
        },

        AuthGuard,

        AppSidebarLeftService,
        AppPageHeaderService,

        CamerasService,
        CamerasManageService,

        UsersService,
        SessionService,
        OrganizationsService,

        SettingsOrganizationManageService,
        SettingsUsersManageService,
        SettingsRolesService,
        SettingsRolesManageService,

    ],

    bootstrap: [AppComponent]

})
export class AppModule {
}
