import { Injectable } from '@angular/core';
import { UsersService } from '../settings-users/UsersService';
import { User } from '../settings-users/User';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SettingsUsersManageService {

    private user: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
    public user$: Observable<User> = this.user.asObservable();

    public constructor(private usersService: UsersService) {


    }

    public getUserById(userId: Number): void {

        this.usersService.getById(userId).subscribe((user: User) => {

            this.user.next(user);

        })

    }

}
