import { Component } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { SettingsRolesComponent } from '../settings-roles/settings-roles.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SettingsRolesService } from '../settings-roles/settings-roles.service';
import { ToastrService } from 'ngx-toastr';
import { SettingsRole } from '../settings-roles/settings-role';
import { SettingsRolesManageService } from './settings-roles-manage.service';

@Component({
    selector: 'app-settings-roles-manage',
    templateUrl: './settings-roles-manage.component.html',
    styleUrls: ['./settings-roles-manage.component.scss']
})
export class SettingsRolesManageComponent {

    public role: SettingsRole;

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private rolesService: SettingsRolesService,
                       public rolesManageService: SettingsRolesManageService,
                       private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,) {

        pageHeaderService.headerTitle = 'Manage Role';
        pageHeaderService.buttons = SettingsRolesComponent.PAGE_HEADER_BUTTONS;

        this.route.params.subscribe((params) => {

            if (params.id) {

                this.rolesManageService.getRole(params.id);

            }

        });

    }

    public onButtonDeleteClick(): void {

        this.rolesManageService.role$.subscribe((role: SettingsRole) => {

            console.log(role);

            this.rolesService.deleteById(role.id).subscribe(() => {

                this.toastr.success(`The role "${role.name}" has been deleted.`);

                this.router.navigate([`/settings/roles`]);

            });

        });

    }

}
