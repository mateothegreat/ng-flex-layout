import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Organization } from '../settings-organizations/Organization';
import { SettingsOrganizationManageService } from './SettingsOrganizationManageService';

@Component({

    selector: 'app-settings-organizations-manage',
    templateUrl: './settings-organizations-manage.component.html',
    styleUrls: ['./settings-organizations-manage.component.scss']

})
export class SettingsOrganizationsManageComponent implements OnInit {

    public organization: Organization;
    public organizationId: Number = 11;

    public constructor(private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,
                       public organizationsManageService: SettingsOrganizationManageService) {

        this.route.params.subscribe((params) => {

            if (params.id) {

                this.organizationsManageService.getOrganization(params.id);

            }

        });

    }

    public ngOnInit() {

    }

}
