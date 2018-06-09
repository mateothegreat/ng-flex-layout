import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs/Observable';
import { APIClient } from '../shared/lib/APIClient';
import { Pageable } from '../shared/lib/Pageable';

@Injectable()
export class UsersService extends APIClient<User> {

    public getPageable(): Observable<Pageable<User>> {

        return super._getPageable<User>(`users`);

    }

    public getById(userId: Number): Observable<User> {

        return this.get<User>(`users/${userId}`);

    }


    public create(obj: User): Observable<User> {

        return this.post<User>(`users`, obj);

    }

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
