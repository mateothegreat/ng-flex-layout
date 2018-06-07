import { Injectable } from '@angular/core';
import { Organization } from '../settings-organizations/Organization';
import { OrganizationsService } from '../settings-organizations/OrganizationsService';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SettingsOrganizationManageService {

    private organization: BehaviorSubject<Organization> = new BehaviorSubject<Organization>(new Organization());
    public organization$: Observable<Organization> = this.organization.asObservable();

    public constructor(private organizationsService: OrganizationsService) {


    }

    public getOrganization(organizationId: Number): void {

        this.organizationsService.getById(organizationId).subscribe((organization: Organization) => {

            this.organization.next(organization);

        })

    }

}
