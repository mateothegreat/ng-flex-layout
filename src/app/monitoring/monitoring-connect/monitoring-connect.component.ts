import { Component, ViewChild } from '@angular/core';
import { AppPageHeaderService } from '../../app-page-header/app-page-header.service';
import { MonitoringService } from '../monitoring.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MonitoringComponent } from '../monitoring.component';
import { Organization } from '../../settings-organizations/Organization';
import { Statuses } from '../../shared/lib/Statuses';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrganizationsService } from '../../settings-organizations/OrganizationsService';
import { ToastrService } from 'ngx-toastr';
import { Pageable } from '../../shared/lib/Pageable';
import { DeviceProtocol } from '../../shared/lib/DeviceProtocol';
import { DeviceProtocols } from '../../shared/lib/DeviceProtocols';
import { MonitoringDevice } from '../monitoring-device';

@Component({
    selector: 'app-monitoring-connect',
    templateUrl: './monitoring-connect.component.html',
    styleUrls: ['./monitoring-connect.component.scss']
})
export class MonitoringConnectComponent {

    @ViewChild('address') private addressInput: ViewChild;

    public protocols: DeviceProtocol[] = DeviceProtocols.PROTOCOLS;
    public statuses: string[] = Statuses.STATUSES;
    public organizations: Organization[];

    public formGroup: FormGroup = new FormGroup({

        organization_id: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        description: new FormControl(''),
        protocol: new FormControl(''),
        address: new FormControl(''),
        port: new FormControl(''),
        status: new FormControl(Statuses.STATUS_ACTIVE, Validators.required)

    });

    public constructor(private pageHeaderService: AppPageHeaderService,
                       private router: Router,
                       private route: ActivatedRoute,
                       private toastr: ToastrService,
                       private monitoringService: MonitoringService,
                       private organizationsService: OrganizationsService) {

        // pageHeaderService.headerTitle = MonitoringComponent.PAGE_HEADER_TITLE;
        pageHeaderService.buttons = MonitoringComponent.PAGE_HEADER_BUTTONS;

        organizationsService.getPageable().subscribe((pageable: Pageable<MonitoringDevice>) => {

            this.organizations = pageable.content;

        });

    }

    public onButtonSaveClick(): void {

        this.monitoringService.create(this.formGroup.value).subscribe((monitoringDevice: MonitoringDevice) => {

            this.toastr.success(`The device "${monitoringDevice.name}" has been connected!`);

            this.router.navigate([`/monitoring/${monitoringDevice.id}`]);

        });

    }

    public onProtocolChange(e: any) {

        this.formGroup.controls['port'].setValue(e.port);

        // console.log(e);
        // console.log(this);
        // setTimeout((e) => {
        //     console.log(e);
        //
        //
        //     this.addressInput.nativeElement.focus();
        //
        //
        // }, 100);

    }

}
