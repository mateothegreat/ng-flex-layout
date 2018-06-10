import { Component, OnInit } from '@angular/core';
import { CamerasManageService } from '../cameras-manage/cameras-manage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-cameras-manage-overview',
    templateUrl: './cameras-manage-overview.component.html',
    styleUrls: ['./cameras-manage-overview.component.scss']
})
export class CamerasManageOverviewComponent implements OnInit {


    public constructor(public camerasManageService: CamerasManageService,
                       private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService) {


    }

    public ngOnInit() {


    }

}
