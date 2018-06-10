import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { APIClient } from '../shared/lib/APIClient';
import { Pageable } from '../shared/lib/Pageable';
import { Camera } from './camera';

@Injectable()

export class CamerasService extends APIClient<Camera> {

    public static readonly URL_BASE: string = 'cameras';

    public getPageable(): Observable<Pageable<Camera>> {

        return super._getPageable<Camera>(CamerasService.URL_BASE);

    }

    public getPageableUsers(organizationId: Number): Observable<Pageable<Camera>> {

        return super._getPageable<Camera>(`${CamerasService.URL_BASE}/${organizationId}/users`);

    }

    public getById(cameraId: Number): Observable<Camera> {

        return this.get<Camera>(`${CamerasService.URL_BASE}/${cameraId}`);

    }

    public create(obj: Camera): Observable<Camera> {

        return this.post<Camera>(CamerasService.URL_BASE, obj);

    }

}
