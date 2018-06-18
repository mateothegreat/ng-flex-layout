import { APIClient } from './APIClient';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserToken } from './UserToken';
import { User } from '../../settings-users/User';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

    public static storageGet(): User {

        return JSON.parse(localStorage.getItem('currentUser')) as User;

    }

    public static storageSet(user: User): void {

        localStorage.setItem('currentUser', JSON.stringify(user));

    }

    public static storageRemove(): void {

        localStorage.removeItem('currentUser');

    }

    public readonly user: User;

    private tokens: any;

    public constructor(private apiClient: APIClient<User>,
                       private router: Router) {

        this.user = SessionService.storageGet();

    }

    public tokensGet(): Observable<UserToken[]> {

        if (this.user) {

            return this.apiClient.get(`users/${this.user.id}/tokens`);

        }

    }

    public isLoggedIn(): boolean {

        return !!(this.user);

    }

    public login(username: string, password: string): Observable<User> {

        return this.apiClient.post<User>(`users/login`, {

            username,
            password

        });

    }

    public logout(): void {

        SessionService.storageRemove();

        location.href = '/login';

    }

}
