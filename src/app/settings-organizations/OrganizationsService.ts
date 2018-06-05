import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {APIClient} from '../shared/lib/APIClient';
import {Pageable} from '../shared/lib/Pageable';
import {Organization} from './Organization';

@Injectable()
export class OrganizationsService extends APIClient<Organization> {

    public getPageable(): Observable<Pageable<Organization>> {

        return super._getPageable<Organization>(`organizations`);

    }

    public getById(): Observable<Organization> {

        return this.get<Organization>(`organizations`);

    }

    //
    // public create(obj: User): Observable<User> {
    //
    //     return this.httpClient.post<User>(`${UsersService.BASE_URL}/users`, obj);
    //
    // }
    //
    // public getById(id: number): Observable<User> {
    //
    //     return this.httpClient.get<User>(`${UsersService.BASE_URL}/users/${id}`);
    //
    // }
    //
    // public deleteById(id: number): Observable<User> {
    //
    //     return this.httpClient.delete<User>(`${UsersService.BASE_URL}/users/${id}`);
    //
    // }
    //
    // public updateById(id: number, cake: User): Observable<User> {
    //
    //     return this.httpClient.put<User>(`${UsersService.BASE_URL}/users/${id}`, cake);
    //
    // }
    //
    // public login(username: string, password: string): Observable<User> {
    //
    //     return this.httpClient.post<User>(`${UsersService.BASE_URL}/users/login`, {
    //
    //         username,
    //         password
    //
    //     });
    //
    // }

}
