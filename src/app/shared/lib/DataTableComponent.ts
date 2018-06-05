import {Component, Input} from '@angular/core';
import {Page} from './Page';
import {Numbers} from './Numbers';
import {BehaviorSubject, Observable} from 'rxjs';
import {Pageable} from './Pageable';

@Component({
    selector: 'data-table',
    styles: [],
    template: `

        <ngx-datatable
            class="material"
            [rows]="rows"
            [columns]="columns"
            [columnMode]="'force'"
            [headerHeight]="50"
            [footerHeight]="50"
            [rowHeight]="'auto'"

            [externalPaging]="true"
            [count]="page?.count"
            [offset]="page?.offset"
            [limit]="page?.limit"

            [selectionType]="'single'"

            (activate)="onActivate($event)"
            (select)='onSelect($event)'
            (page)='onPageClick($event)'>

        </ngx-datatable>

    `
})
export class DataTableComponent<T> {

    @Input() public columns: string[] = [];
    @Input() public rows: any[] = [];
    @Input() public page: Page = new Page();

    private selected = [];

    private _stream: BehaviorSubject<{}> = new BehaviorSubject<{}>({});
    public stream$: Observable<{}> = this._stream.asObservable();

    private _clicks: BehaviorSubject<T> = new BehaviorSubject<T>({} as T);
    public clicks$: Observable<T> = this._clicks.asObservable();

    public onPageClick($event): void {

        this._stream.next($event);

    }

    public setPage(pageable: Pageable<T>) {

        this.page = new Page();
        this.page.count = pageable.numberOfElements || 0;
        this.page.limit = pageable.pageable.pageSize;
        this.page.totalPages = Math.ceil(this.page.count.valueOf() / this.page.limit.valueOf());
        this.page.offset = Numbers.getNumber(pageable.pageable.offset);

        this.rows = pageable.content;

    }

    public onSelect({selected}) {
        console.log('Select Event', selected, this);
    }

    public onActivate(event) {

        if (event.type === 'click') {

            this._clicks.next(event.row);

        }

    }

}
