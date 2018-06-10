import { Component } from '@angular/core';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { SettingsRolesComponent } from '../settings-roles/settings-roles.component';
import { Statuses } from '../shared/lib/Statuses';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SettingsRolesService } from '../settings-roles/settings-roles.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SettingsRole } from '../settings-roles/settings-role';
import { Organization } from '../settings-organizations/Organization';
import { Pageable } from '../shared/lib/Pageable';
import { OrganizationsService } from '../settings-organizations/OrganizationsService';

@Component({

    selector: 'app-settings-roles-create',
    templateUrl: './settings-roles-create.component.html',
    styleUrls: ['./settings-roles-create.component.scss']

})
export class SettingsRolesCreateComponent {

    public statuses: string[] = Statuses.STATUSES;
    public organizations: Organization[];

    public formGroup: FormGroup = new FormGroup({

        organization_id: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        description: new FormControl(''),
        status: new FormControl(Statuses.STATUS_ACTIVE, Validators.required)

    });

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private rolesService: SettingsRolesService,
                       private router: Router,
                       private toastr: ToastrService,
                       private organizationsService: OrganizationsService,) {

        pageHeaderService.headerTitle = 'Create Role';
        pageHeaderService.buttons = SettingsRolesComponent.PAGE_HEADER_BUTTONS;

        organizationsService.getPageable().subscribe((pageable: Pageable<Organization>) => {

            this.organizations = pageable.content;

        });

    }

    public onButtonSaveClick(): void {

        this.rolesService.create(this.formGroup.value).subscribe((role: SettingsRole) => {

            this.toastr.success(`The role "${role.name}" has been created!`);

            this.router.navigate([`/settings/roles/${role.id}`]);

        });

    }

}
