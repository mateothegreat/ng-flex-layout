import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SettingsRole } from '../settings-roles/settings-role';
import { SettingsRolesService } from '../settings-roles/settings-roles.service';

@Injectable({
    providedIn: 'root'
})
export class SettingsRolesManageService {

    private role: BehaviorSubject<SettingsRole> = new BehaviorSubject<SettingsRole>(new SettingsRole());
    public role$: Observable<SettingsRole> = this.role.asObservable();

    public constructor(private rolesService: SettingsRolesService) {


    }

    public getRole(roleId: Number): void {

        this.rolesService.getById(roleId).subscribe((role: SettingsRole) => {

            this.role.next(role);

        });

    }

}
