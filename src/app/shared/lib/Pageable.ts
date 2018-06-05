export class Pageable<T> {

    public content: T[];

    public pageable: {

        sort: {

            sorted: boolean,
            unsorted: boolean

        },

        pageSize: Number,
        pageNumber: Number,
        offset: Number,
        paged: boolean,
        unpaged: boolean

    };

    public last: boolean = false;
    public totalPages: Number = 0;
    public totalElements: Number = 0;
    public first: boolean = false;

    public sort: {

        sorted: boolean,
        unsorted: boolean

    };

    public numberOfElements: number = 0;
    public size: Number = 0;
    public number: Number = 0;

    public constructor(pageableObj: any) {

        this.content = pageableObj.content;
        this.pageable = pageableObj.pageable;
        this.last = pageableObj.last;
        this.totalPages = pageableObj.totalPages;
        this.totalElements = pageableObj.totalElements;
        this.first = pageableObj.first;
        this.sort = pageableObj.sort;
        this.numberOfElements = pageableObj.numberOfElements;
        this.size = pageableObj.size;
        this.number = pageableObj.number;

    }

}
