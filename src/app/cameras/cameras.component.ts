import { Component, ViewChild } from '@angular/core';
import { CamerasService } from './cameras.service';
import { Pageable } from '../shared/lib/Pageable';
import { DataTableComponent } from '../shared/lib/DataTableComponent';
import { Camera } from './camera';
import { Router } from '@angular/router';
import { AppPageHeaderService } from '../app-page-header/app-page-header.service';

@Component({

    selector: 'app-cameras',
    templateUrl: './cameras.component.html',
    styleUrls: ['./cameras.component.scss']

})
export class CamerasComponent {

    public static readonly PAGE_HEADER_BUTTONS: any[] = [{

        title: 'Connect Camera',
        icon: 'add',
        link: '/cameras/connect'

    }, {

        title: 'View Cameras',
        icon: 'list_alt',
        link: '/cameras'

    }];

    @ViewChild(DataTableComponent) private datatableRef: DataTableComponent<Camera>;

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private camerasService: CamerasService,
                       private router: Router) {

        pageHeaderService.headerTitle = 'Cameras';
        pageHeaderService.buttons = CamerasComponent.PAGE_HEADER_BUTTONS;

        this.camerasService.getPageable().subscribe((pageable: Pageable<Camera>) => {

            this.datatableRef.setPage(pageable);

        })

    }

    public ngOnInit(): void {

        this.datatableRef.clicks$.subscribe((camera: Camera) => {

            if (camera.id) {

                this.router.navigate([`/cameras/${camera.id}`]);

            }

        });

    }

}
