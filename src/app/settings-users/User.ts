import {Statuses} from '../shared/lib/Statuses';

export class User {

    public status: string = Statuses.STATUS_ACTIVE;

    public organization_id: Number;

    public id: number;
    public email: string;
    public username: string;
    public password: string;
    public firstname: string;
    public lastname: string;

}
