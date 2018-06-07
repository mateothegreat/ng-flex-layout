import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Statuses } from '../shared/lib/Statuses';
import { OrganizationsService } from '../settings-organizations/OrganizationsService';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Organization } from '../settings-organizations/Organization';
import { SettingsOrganizationsComponent } from '../settings-organizations/settings-organizations.component';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';

@Component({

    selector: 'app-settings-organizations-create',
    templateUrl: './settings-organizations-create.component.html',
    styleUrls: ['./settings-organizations-create.component.scss']

})
export class SettingsOrganizationsCreateComponent {

    public statuses: string[] = Statuses.STATUSES;

    public formGroup: FormGroup = new FormGroup({

        name: new FormControl('', Validators.required),
        description: new FormControl(''),
        status: new FormControl(Statuses.STATUS_ACTIVE, Validators.required)

    });

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private organizationsService: OrganizationsService,
                       private router: Router,
                       private toastr: ToastrService) {

        pageHeaderService.headerTitle = 'Organizations';
        pageHeaderService.buttons = SettingsOrganizationsComponent.PAGE_HEADER_BUTTONS;

    }

    public onButtonSaveClick(): void {

        this.organizationsService.create(this.formGroup.value).subscribe((organization: Organization) => {

            this.toastr.success(`The organization "${organization.name}" has been created!`);
            
            this.router.navigate([`/settings/organizations/${organization.id}`]);

        });

    }

}
