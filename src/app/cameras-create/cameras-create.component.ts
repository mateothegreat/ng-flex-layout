import { Component } from '@angular/core';
import { CamerasManageService } from '../cameras-manage/cameras-manage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CamerasComponent } from '../cameras/cameras.component';
import { ToastrService } from 'ngx-toastr';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { Pageable } from '../shared/lib/Pageable';
import { Organization } from '../settings-organizations/Organization';
import { OrganizationsService } from '../settings-organizations/OrganizationsService';
import { Statuses } from '../shared/lib/Statuses';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-cameras-create',
    templateUrl: './cameras-create.component.html',
    styleUrls: ['./cameras-create.component.scss']
})
export class CamerasCreateComponent {

    public protocols: string[] = ['RTSP', 'RTMP'];
    public statuses: string[] = Statuses.STATUSES;
    public organizations: Organization[];

    public formGroup: FormGroup = new FormGroup({

        organization_id: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        description: new FormControl(''),
        status: new FormControl(Statuses.STATUS_ACTIVE, Validators.required)

    });

    public constructor(public camerasManageService: CamerasManageService,
                       private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,
                       private pageHeaderService: AppPageHeaderService,
                       private organizationsService: OrganizationsService) {

        pageHeaderService.headerTitle = CamerasComponent.PAGE_TITLE;
        pageHeaderService.buttons = CamerasComponent.PAGE_HEADER_BUTTONS;

        organizationsService.getPageable().subscribe((pageable: Pageable<Organization>) => {

            this.organizations = pageable.content;

        });

    }

    public onButtonSaveClick(): void {

        // this.rolesService.create(this.formGroup.value).subscribe((role: SettingsRole) => {
        //
        //     this.toastr.success(`The role "${role.name}" has been created!`);
        //
        //     this.router.navigate([`/settings/roles/${role.id}`]);
        //
        // });

    }


}
