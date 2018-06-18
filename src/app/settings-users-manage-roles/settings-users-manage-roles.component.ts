import { Component, ViewChild } from '@angular/core';
import { SettingsRolesService } from '../settings-roles/settings-roles.service';
import { SettingsRole } from '../settings-roles/settings-role';
import { Pageable } from '../shared/lib/Pageable';
import { MatSelect } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-settings-users-manage-roles',
    templateUrl: './settings-users-manage-roles.component.html',
    styleUrls: ['./settings-users-manage-roles.component.scss']
})
export class SettingsUsersManageRolesComponent {

    @ViewChild('select') public select: MatSelect;

    public roles: SettingsRole[];

    public constructor(public rolesService: SettingsRolesService,
                       private toastr: ToastrService) {

        rolesService.getPageable().subscribe((roles: Pageable<SettingsRole>) => {

            this.roles = roles.content;

        });

    }

    public onSelectChange(role: SettingsRole): void {

        console.log(role);
        console.log(this.select);

        this.select.value = 0;

        this.toastr.success(`The role "${role.name}" has been added.`);

    }

}
