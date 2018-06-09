import { Component } from '@angular/core';
import { Statuses } from '../shared/lib/Statuses';
import { User } from '../settings-users/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { SettingsUsersComponent } from '../settings-users/settings-users.component';
import { OrganizationsService } from '../settings-organizations/OrganizationsService';
import { Pageable } from '../shared/lib/Pageable';
import { Organization } from '../settings-organizations/Organization';
import { UsersService } from '../settings-users/UsersService';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({

    selector: 'settings-users-create',
    templateUrl: './settings-users-create.component.html',
    styleUrls: ['./settings-users-create.component.scss']

})
export class SettingsUsersCreateComponent {

    public formGroup: FormGroup = new FormGroup({

        organization_id: new FormControl(0, Validators.required),
        email: new FormControl('', Validators.required),
        firstname: new FormControl(),
        lastname: new FormControl(),
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        status: new FormControl(Statuses.STATUS_ACTIVE, Validators.required)

    });

    public user: User = new User();
    public organizations: Organization[];

    public statuses: string[] = Statuses.STATUSES;

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private usersService: UsersService,
                       private organizationsService: OrganizationsService,
                       private router: Router,
                       private toastr: ToastrService) {

        pageHeaderService.headerTitle = 'Create User';
        pageHeaderService.buttons = SettingsUsersComponent.PAGE_HEADER_BUTTONS;

        organizationsService.getPageable().subscribe((pageable: Pageable<Organization>) => {

            this.organizations = pageable.content;

        });

    }

    public onButtonSaveClick(): void {

        this.usersService.create(this.formGroup.value).subscribe((user: User) => {

            this.toastr.success(`The user "${user.username}" has been created!`);

            this.router.navigate([`/settings/users/${user.id}`]);

        });

    }

}
