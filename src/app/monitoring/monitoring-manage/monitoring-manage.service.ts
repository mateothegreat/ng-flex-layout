import { Injectable } from '@angular/core';
import { MonitoringService } from '../monitoring.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { MonitoringDevice } from '../monitoring-device';

@Injectable()
export class MonitoringManageService {

    private device: BehaviorSubject<MonitoringDevice> = new BehaviorSubject<MonitoringDevice>(new MonitoringDevice());
    public device$: Observable<MonitoringDevice> = this.device.asObservable();

    public constructor(private monitoringService: MonitoringService) {


    }

    public getMonitoringDevice(deviceId: Number): void {

        this.monitoringService.getById(deviceId).subscribe((monitoringDevice: MonitoringDevice) => {

            this.device.next(monitoringDevice);

        });

    }

}
