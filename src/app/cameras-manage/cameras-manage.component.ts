import { Component } from '@angular/core';
import { CamerasManageService } from './cameras-manage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';
import { CamerasComponent } from '../cameras/cameras.component';

@Component({
    selector: 'app-cameras-manage',
    templateUrl: './cameras-manage.component.html',
    styleUrls: ['./cameras-manage.component.scss']
})
export class CamerasManageComponent {

    public constructor(public camerasManageService: CamerasManageService,
                       private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,
                       private pageHeaderService: AppPageHeaderService) {


        pageHeaderService.headerTitle = 'Manage Camera';
        pageHeaderService.buttons = CamerasComponent.PAGE_HEADER_BUTTONS;

        this.route.params.subscribe((params) => {

            if (params.id) {

                this.camerasManageService.getCamera(params.id);

            }

        });

    }

}
