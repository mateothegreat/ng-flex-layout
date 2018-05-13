import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppPageHeaderService {

    public headerTitle: string;
    public headerIcon: string;

    public buttons: any[];

    public constructor() {
    }

}
