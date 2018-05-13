import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PageRequest} from './PageRequest';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class APIClient<T> {

    public static readonly BASE_URL: string = environment.BASE_URL;

    public constructor(private httpClient: HttpClient) {

    }

    public get<T>(url: string): Observable<T> {

        return this.httpClient.get<T>(`${APIClient.BASE_URL}/${url}`);

    }

    public search<T>(url: string, pageRequest: PageRequest): Observable<any> {

        return this.httpClient.get<T>(`${APIClient.BASE_URL}/${url}?terms=${pageRequest.terms}&limit=${pageRequest.limit}&offset=${pageRequest.offset}`);

    }

    public post<T>(url: string, body: any): Observable<T> {

        return this.httpClient.post<T>(`${APIClient.BASE_URL}/${url}`, body);

    }

    public put<T>(url: string, body: any): Observable<T> {

        return this.httpClient.put<T>(`${APIClient.BASE_URL}/${url}`, body);

    }

    public delete<T>(url: string): Observable<T> {

        return this.httpClient.delete<T>(`${APIClient.BASE_URL}/${url}`);

    }

}
