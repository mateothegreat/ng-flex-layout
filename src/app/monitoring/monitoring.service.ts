import { Injectable } from '@angular/core';
import { APIClient } from '../shared/lib/APIClient';
import { MonitoringDevice } from './monitoring-device';
import { Pageable } from '../shared/lib/Pageable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MonitoringService extends APIClient<MonitoringDevice> {

    public static readonly URL_BASE: string = 'monitoring';

    public getPageable(): Observable<Pageable<MonitoringDevice>> {

        return super._getPageable<MonitoringDevice>(MonitoringService.URL_BASE);

    }

    public getPageableUsers(organizationId: Number): Observable<Pageable<MonitoringDevice>> {

        return super._getPageable<MonitoringDevice>(`${MonitoringService.URL_BASE}/${organizationId}/users`);

    }

    public getById(monitoringDeviceId: Number): Observable<MonitoringDevice> {

        return this.get<MonitoringDevice>(`${MonitoringService.URL_BASE}/${monitoringDeviceId}`);

    }

    public create(obj: MonitoringDevice): Observable<MonitoringDevice> {

        return this.post<MonitoringDevice>(MonitoringService.URL_BASE, obj);

    }

}
