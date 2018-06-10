import { Injectable } from '@angular/core';
import { APIClient } from '../shared/lib/APIClient';
import { SettingsRole } from './settings-role';
import { Pageable } from '../shared/lib/Pageable';
import { Observable } from 'rxjs/Observable';

@Injectable({
    providedIn: 'root'
})
export class SettingsRolesService extends APIClient<SettingsRole> {


    public getPageable(): Observable<Pageable<SettingsRole>> {

        return super._getPageable<SettingsRole>(`roles`);

    }

    public getById(userId: Number): Observable<SettingsRole> {

        return this.get<SettingsRole>(`roles/${userId}`);

    }

    public create(obj: SettingsRole): Observable<SettingsRole> {

        return this.post<SettingsRole>(`roles`, obj);

    }

    public deleteById(id: Number): Observable<void> {

        return super.delete<void>(`roles/${id}`);

    }

}
